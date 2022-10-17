from django.db import models
from authentication.models import User

# Create your models here.

class Watchlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    watchlist = models.CharField(max_length=10)
    target_price = models.DecimalField(max_digits=19, decimal_places=2)