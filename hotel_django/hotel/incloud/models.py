from django.db import models

# Create your models here.
from django.db import models

class Hotel(models.Model):
    name = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.FloatField(default=0)

    def __str__(self):
        return f"{self.name} ({self.city})"
