from django.shortcuts import render
from rest_framework import generics
from .models import Subscription_Plan
from .serializers import SubscriptionPlanSerializer
# Create your views here.

class SubscriptionPlanList(generics.ListCreateAPIView):
    queryset = Subscription_Plan.objects.all()
    serializer_class=SubscriptionPlanSerializer
class SubscriptionPlanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscription_Plan.objects.all()
    serializer_class=SubscriptionPlanSerializer    