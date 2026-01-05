from django.urls import path
from . import views

app_name = 'incloud'

urlpatterns = [
    path('', views.index, name='index'),
    path('ari-beri/', views.ari_beri, name='ari_beri'),
    path('ari-beri/search/', views.ari_beri_search, name='ari_beri_search'),
    path('demalys/', views.demalys, name='demalys'),
    path('vacancies/', views.vacancies, name='vacancies'),
    path('support/', views.support, name='support'),
]
