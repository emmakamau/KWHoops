from dataclasses import field
from rest_framework import serializers
from .models import Subscription_Plan

class SnippetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription_Plan
        fields = '__all__'