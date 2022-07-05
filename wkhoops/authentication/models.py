import jwt
from datetime import datetime, timedelta
from django.conf import settings
from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractUser, PermissionsMixin)



# Create your models here.
class CustomUserManager(BaseUserManager):
    """
     To define manager by inheriting from BaseUserManager
     """

    def create_user(self, username, email, password=None):
        if username is None:
            raise TypeError("Users must have a username.")
        if email is None:
            raise TypeError("Users must have an email address.")
        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        """
         """
        if password is None:
            raise TypeError('SuperUser must have a password.')
        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class CustomUser(AbstractUser, PermissionsMixin):
    """
    Creates custom user inheriting from AbstractUser
    """
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    @property
    def token(self):
        """
        Get user's token by calling user.token instead of user.generate_jwt_token().
        :return:
        """
        return self._generate_jwt_token()

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username

    def _generate_jwt_token(self):
        """
        Generate JWT token to store the user id and expire in the specified time period
        """
        dt = datetime.now() + timedelta(days=60)
        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime("%s"))
        }, settings.SECRET_KEY, algorithm="HS256")

        return token

