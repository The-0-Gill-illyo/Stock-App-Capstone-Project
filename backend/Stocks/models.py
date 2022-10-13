from django.db import models
from authentication.models import User

class Stocks(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ticker_symbol = models.CharField(max_length=10)
    stock_price = models.DecimalField()
    target_price = models.DecimalField()
    watchlist = models.CharField(max_length=10)