from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import authenticate
from .utils.password_validators import get_password_policy_errors
from .utils.authentication_handlers import AuthTokenHandler


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password', 'token']

    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=255, read_only=True)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)
        if email is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )
        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )
        user = authenticate(username=email, password=password)
        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        return {
            'email': user.email,
            'username': user.username,
            'token': user.token
        }


class UserSerializer(serializers.ModelSerializer):
    """Handles serialization and deserialization of User objects."""

    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password', 'token',)
        read_only_fields = ('token',)

    def update(self, instance, validated_data):
        """Performs an update on a User."""
        password = validated_data.pop('password', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        if password is not None:
            instance.set_password(password)
            instance.save()

        return instance


class PasswordResetSerializer(serializers.Serializer):
    """
    Serializer for password reset
    """
    email = serializers.EmailField(
        required=False,
        allow_blank=True,
        allow_null=True,
        write_only=True
    )

    def validate(self, data):
        email = data.get("email")
        if not email:
            raise serializers.ValidationError({
                "email": "Please provide your email address"
            })
        if not EmailValidator(email):
            raise serializers.ValidationError({
                "email": "Enter a valid email address."
            })
        try:
            User.objects.get(email=email)
        except ObjectDoesNotExist:
            raise serializers.ValidationError({
                "email": "No account with that email address"
            })
        return data


class PasswordResetConfirmSerializer(serializers.Serializer):
    """
    Serializer class for password reset confirm
    """
    token = serializers.CharField(
        max_length=250,
        write_only=True,
        allow_null=True,
        allow_blank=True,
        required=False
    )
    password = serializers.CharField(
        max_length=250,
        write_only=True,
        allow_null=True,
        allow_blank=True,
        required=False
    )
    password_confirm = serializers.CharField(
        max_length=250,
        write_only=True,
        allow_null=True,
        allow_blank=True,
        required=False
    )

    def validate(self, data):
        if not data.get("token"):
            raise serializers.ValidationError({
                "token": "There is no token provided"
            })
        try:
            token_object = Token.objects.get(key=data.get("token"))
        except ObjectDoesNotExist:
            raise serializers.ValidationError({
                "token": "Invalid token"
            })
        if AuthTokenHandler.expired_token(token_object):
            raise serializers.ValidationError({
                "token": "Expired token"
            })
        self.get_password_field_erros(data)
        try:
            validate_password(data.get("password"))
        except ValidationError as error:
            raise serializers.ValidationError({
                "password": list(error)
            })
        password_errors = get_password_policy_errors(data.get("password"))
        if password_errors:
            raise serializers.ValidationError({
                "password": list(password_errors)
            })
        return data

    def get_password_field_erros(self, data):
        """
        Captures null, blank and empty fields for password
        and password confirm
        """
        if not data.get("password") and not data.get("password_confirm"):
            raise serializers.ValidationError({
                "password": "Please provide your password",
                "password_confirm": "Please confirm your password"
            })
        elif not data.get("password"):
            raise serializers.ValidationError({
                "password": "Please provide your password"
            })
        elif not data.get("password_confirm"):
            raise serializers.ValidationError({
                "password_confirm": "Please confirm your password"
            })
        elif data["password"] != data["password_confirm"]:
            raise serializers.ValidationError({
                "password": "Passwords did not match"
            })