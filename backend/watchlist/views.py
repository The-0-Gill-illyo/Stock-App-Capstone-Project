from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Watchlist
from .serializers import WatchlistSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_watchlist(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        stocks = Watchlist.objects.filter(user_id=request.user.id)
        serializer = WatchlistSerializer(stocks, many=True)
        return Response(serializer.data)