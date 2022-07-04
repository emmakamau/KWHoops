from dataclasses import field
from rest_framework import serializers
from authentication.models import User

class RegisterSerializer(serializers.model.serializer):

    password =serializers.CharField(max_length=125, min_length =6, write_only=True)
    class Meta:
        model = User
        fields =('username','email', 'password')

    def create(self, validated_data):
        return User.object.create_user(**validated_data)