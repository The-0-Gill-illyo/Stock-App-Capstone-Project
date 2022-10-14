from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from backend.users.serializers import UserSerializer
from .models import User
# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def market_quote(request):
    stock_choice = User.objects.filter(stock_choice)
    serializer = UserSerializer(stock_choice, many=True)
    print(request)
    return Response(serializer.data, status=status.HTTP_200_OK)
    