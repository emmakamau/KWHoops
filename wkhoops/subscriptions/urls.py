from django.urls import path 
from rest_framework.urlpatterns import format_suffix_patterns
from subscriptions import views
from .views import *


urlpatterns = [
        path('api/subplan/', views.SubscriptionPlanList.as_view()),  
        path('api/subplan/<int:pk>/', views.SubscriptionPlanDetail.as_view()),
        path('api/subscription/', views.SubscriptionList.as_view()),   
        path('api/subscription/<int:pk>/', views.SubscriptionDetail.as_view()),
        path('subscribe/', views.PlanSubscription.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns) # provides a simple, DRY way to refer to a specific file format for a URL endpoint.