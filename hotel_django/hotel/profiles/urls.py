from django.urls import path
from . import views

app_name = 'profiles'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('notifications/', views.notifications, name='notifications'),
    path('profile/', views.profile, name='profile'),
]
