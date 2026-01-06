from django.urls import path
from . import views

app_name = 'incloud'

urlpatterns = [
    path('', views.index, name='index'),
    path('ari-beri/', views.ari_beri, name='ari_beri'),
    path('demalys/', views.demalys, name='demalys'),
    path('vacancies/', views.vacancies, name='vacancies'),
    path('support/', views.support, name='support'),
]
