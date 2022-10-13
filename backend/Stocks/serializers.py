from rest_framework import serializers
from .models import Stocks

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        stock = Stocks
        fields = ['ticker_symbol', 'Stock_price', 'target_price', 'watchlist']
        depth = 1