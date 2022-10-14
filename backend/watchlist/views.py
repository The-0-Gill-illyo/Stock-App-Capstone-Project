from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Watchlist
from .serializers import WatchlistSerializer

# Create your views here.

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_watchlist(request, pk):
    watchlist = get_object_or_404(Watchlist, pk=pk)
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        stocks = Watchlist.objects.filter(user_id=request.user.id)
        serializer = WatchlistSerializer(stocks, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WatchlistSerializer(watchlist, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        watchlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)