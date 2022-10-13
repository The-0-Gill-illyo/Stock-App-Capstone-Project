from django.urls import path
from Stocks import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('/api/yahoo/qu/quote/AAPL,MSFT', views.stock_search),
    path(),
]
