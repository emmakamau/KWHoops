from rest_framework.routers import DefaultRouter
from services import views
from .views import *
from django.urls import path,include

router = DefaultRouter()

routers.register('services',ServicesViewSet)
routers.register('category',CategoryViewSet)

urlpatterns= [
    path('api/',include(router.urls))
]