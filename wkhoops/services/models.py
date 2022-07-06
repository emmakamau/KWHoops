from django.db import models

# Create your models here.
class Services(models.Model):
    CATEGORY=(
        ('Trainings','Trainings'),
        ('Yoga','Yoga'),
        ('Workouts','Workouts'),
        ('Diet','Diet'),
        ('Bootcamp','Bootcamp'),
        ('Tournament','Tournament'),
    )

    category = models.CharField(max_length=50,null=True,choices=CATEGORY)
    description = models.TextField(max_length=200,null=True,default='')
    entry_date = models.DateField(auto_now_add=True,null=False)
    image = models.ImageField('image',null=True)
    # video = models.ImageField('video',null=True)
    

    def save_services(self):
        self.save()

    def __str__(self):
        return self.category

class Category(models.Model):
    category_name = models.CharField(max_length=50,null=False)

    def save_category(self):
        self.save()

    def __str__(self):
        return self.category_name    
    

