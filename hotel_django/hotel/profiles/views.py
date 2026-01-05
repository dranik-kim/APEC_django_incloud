from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, 'profiles/hotel_dashboard.html')

def notifications(request):
    return render(request, 'profiles/notification.html')

def profile(request):
    return render(request, 'profiles/profile.html')

