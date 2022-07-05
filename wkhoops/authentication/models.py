from django.db import models
from helpers.models import TrackingModel
from django.contrib.auth.models import PermissionsMixin,AbstractBaseUser,UserManager
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils import timezone
import jwt
class MyUserManager(UserManager):
    def create_user(self, username, email, password=None):
        
        if not username:
            raise TypeError('The given username must be set')

        if not email:
            raise ValueError(('The email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email,)
        user.set_password(password)
        user.save()
        return user

    
    def create_user(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, **extra_fields)
       

    def create_superuser(self, username, email, password):
     
      if password is None:
          raise TypeError('Superusers must have a password.')

      user = self.create_user(username, email, password)
      user.is_superuser = True
      user.is_staff = True
      user.save()
      return user


class User(AbstractBaseUser, PermissionsMixin,TrackingModel):

    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        ('username'),max_length=150, unique=True,
        help_text=('Required. 150 characters or fewer.'),
        validators=[username_validator],
        error_messages={'unique': ("A user with that username already exists."),
        },
    )

    email = models.EmailField(('email address'), blank=True, unique=True)
    is_staff = models.BooleanField(
        ('staff status'),
        default=False,
        help_text=('Confirm whether the user can log into this admin site.'),
    )
    is_active = models.BooleanField(
        ('active'),
        default=True,
        help_text=(
            'confirm whether this user should be treated as active. '
            
        ),
    )
    date_joined = models.DateTimeField(('date joined'), default=timezone.now)
    email_verified=models.BooleanField(
        ('email_verified'),
        default=False,
        help_text=('Confirm whether this users email is verified')
    )
    objects = MyUserManager()

    EmailField = 'email'
    USERNAME_FIELD ='email'
    REQUIRED_FIELDS =['username']


    @property
    def token(self):
        return ''