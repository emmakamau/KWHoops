from django.shortcuts import render
from .models import Services,Category
from rest_framework.viewsets import ModelViewSet
from .serializers import ServicesSerializer,CategorySerializer

# Create your views here.
class ServicesViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer    

