from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Stocks
from .serializers import StockSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def stock_search(request):
    stocks = Stocks.objects.all()
    serializer = StockSerializer(stocks, many=True)
    print(request)
    return Response(serializer.data, status=status.HTTP_200_OK)