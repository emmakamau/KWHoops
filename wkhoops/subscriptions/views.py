from rest_framework import generics
from rest_framework.generics import GenericAPIView
from .models import Subscription_Plan,Subscription
from .serializers import SubscriptionPlanSerializer,SubscriptionSerializer
from rest_framework.decorators import permission_classes, api_view
from django.core.exceptions import ValidationError
from rest_framework import response, status, permissions
from authentication.models import User

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

class PlanSubscription(GenericAPIView):
    authentication_classes = []

    serializer_class = SubscriptionSerializer

    def post(self, request):
        user_email = request.data.get("user_email")
        user = User.objects.get(email=user_email)
        request.data['user_id'] = user.id
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


                
    