from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        user = User
        field = ['id', 'first_name', 'last_name', 'email', 'watchlist', 'user_id']
        depth = 1