from django.db import models
from authentication.models import User

# Create your models here.

class Subscription_Plan(models.Model):
    sub_plan_name = models.CharField(max_length=50)
    sub_plan_cost = models.IntegerField()

    def __str__(self):
        return self.sub_plan_name

    def save_subsription_plan(self):
        self.save() 


class Subscription(models.Model):
    sub_plan_id = models.ForeignKey(Subscription_Plan, on_delete=models.CASCADE)
    sub_paid = models.BooleanField()
    user_id = models.OneToOneField(User,related_name='subscription', on_delete=models.CASCADE)