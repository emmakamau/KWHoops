from atexit import register
from authentication import views
from django.urls import path
from .views import LogoutAPIView, SetNewPasswordAPIView, PasswordTokenCheckAPI, RequestPasswordResetEmail
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns=[
  path('register/',views.RegisterAPIView.as_view(), name="register"),
  path('login/', views.LoginAPIView.as_view(), name="login"), 
  path('user/', views.AuthUserAPIView.as_view(), name="user"),

  path('logout/', LogoutAPIView.as_view(), name="logout"),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
  path('password-reset/<uidb64>/<token>/',
         PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
  path('password-reset-complete/', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete')
]
