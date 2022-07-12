from django.contrib import admin
from .models import Subscription_Plan,Subscription

# Register your models here.
admin.site.register(Subscription_Plan)

admin.site.register(Subscription)