from django.shortcuts import render
from django.db.models import Q
from .models import Hotel


def index(request):
    top_hotels = Hotel.objects.order_by('-rating')[:3]

    context = {
        'title': 'InCloud - С нами просто!',
        'top_hotels': top_hotels
    }
    return render(request, 'incloud/index.html', context)


def ari_beri(request):
    query = request.GET.get('q', '')  # Получаем строку поиска
    hotels = Hotel.objects.all()

    if query:
        hotels = hotels.filter(
            Q(name__icontains=query) | 
            Q(city__icontains=query) | 
            Q(country__icontains=query)
        )

    context = {
        'title': 'InCloud - Ары Берi по городам',
        'hotels': hotels,
        'query': query,
    }
    return render(request, 'incloud/ari_beri.html', context)

def demalys(request):
    context = {
        'title': 'InCloud - Демалыс по умному!',
    }
    return render(request, 'incloud/demalys.html', context)

def vacancies(request):
    context = {
        'title': 'Вакансии: Станьте частью InCloud',
    }
    return render(request, 'incloud/vacancies.html', context)

def support(request):
    context = {
        'title': 'Техподдержка InCloud',
    }
    return render(request, 'incloud/support.html', context)
