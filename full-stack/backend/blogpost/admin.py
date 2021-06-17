from django.contrib import admin

# Register your models here.

from .models import Blogpost

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'content')

admin.site.register(Blogpost, BlogAdmin)