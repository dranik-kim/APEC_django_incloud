from django.shortcuts import render

# Create your views here.
def favorites1(request):
    return render(request, 'favorites/favorites1.html')

def favorites2(request):
    return render(request, 'favorites/favorites2.html')
