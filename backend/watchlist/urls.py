from django.urls import path
from watchlist import views

urlpatterns = [
    path('', views.user_watchlist),
    path('add_to_watchlist/<pk>/', views.add_to_watchlist)
]