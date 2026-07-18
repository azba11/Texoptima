from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    business_name = models.CharField(max_length=150)
    owner_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.business_name