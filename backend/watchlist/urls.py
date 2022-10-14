from django.urls import path, include
from watchlist import views

urlpatters = [
    path('', views.user_watchlist)
]