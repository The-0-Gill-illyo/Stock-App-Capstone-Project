from django.urls import path
from watchlist import views

urlpatterns = [
    path('', views.user_watchlist)
]