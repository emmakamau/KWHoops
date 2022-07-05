from django.db import models

# Create your models here.

class Subscription_Plan(models.Model):
    sub_plan_name = models.CharField(max_length=50)
    sub_plan_cost = models.IntegerField()

    def __str__(self):
        return self.sub_plan_name

    def save_subsription_plan(self):
        self.save() 
