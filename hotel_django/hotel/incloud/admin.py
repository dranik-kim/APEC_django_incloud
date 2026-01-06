from django.contrib import admin
from .models import Hotel

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'country', 'price', 'rating')
    search_fields = ('name', 'city', 'country')
    list_filter = ('city', 'country', 'rating')
