from django.urls import path
from watchlist import views

urlpatterns = [
    path('', views.user_watchlist),
    path('delete_from_watchlist/<int:delete>/', views.delete_from_watchlist)
]