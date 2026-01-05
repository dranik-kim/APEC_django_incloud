from django.urls import path
from . import views

app_name = 'favorites'

urlpatterns = [
    path('', views.favorites1, name='favorites1'),
    path('alt/', views.favorites2, name='favorites2'),
]
