from dataclasses import field
from rest_framework import serializers
from .models import Subscription_Plan,Subscription

class SubscriptionPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription_Plan
        fields = '__all__'

class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription
        fields = '__all__'