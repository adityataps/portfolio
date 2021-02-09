from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .serializers import BlogpostSerializer
from .models import Blogpost

class BlogpostView(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all()