from rest_framework import generics
from .models import Subscription_Plan,Subscription
from .serializers import SubscriptionPlanSerializer,SubscriptionSerializer
# Create your views here.

class SubscriptionPlanList(generics.ListCreateAPIView):
    queryset = Subscription_Plan.objects.all()
    serializer_class=SubscriptionPlanSerializer
class SubscriptionPlanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscription_Plan.objects.all()
    serializer_class=SubscriptionPlanSerializer    

class SubscriptionList(generics.ListCreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class=SubscriptionSerializer
class SubscriptionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscription.objects.all()
    serializer_class=SubscriptionSerializer   