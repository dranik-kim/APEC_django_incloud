from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'incloud/index.html')

def ari_beri(request):
    return render(request, 'incloud/ari_beri.html')

def demalys(request):
    return render(request, 'incloud/demalys.html')

def vacancies(request):
    return render(request, 'incloud/vacancies.html')

def support(request):
    return render(request, 'incloud/support.html')
