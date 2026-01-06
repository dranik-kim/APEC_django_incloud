from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('incloud:index')
        else:
            messages.error(request, 'Неверный юзернейм или пароль')

    return render(request, 'users/login.html')


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Аккаунт создан. Войдите.')
            return redirect('users:login')
    else:
        form = UserCreationForm()

    return render(request, 'users/signup.html', {'form': form})


def forgot_password(request):
    return render(request, 'users/forgot_password.html')
