from django.shortcuts import render

# Create your views here.
def login_view(request):
    return render(request, 'users/login.html')

def signup(request):
    return render(request, 'users/signup.html')

def forgot_password(request):
    return render(request, 'users/forgot_password.html')
