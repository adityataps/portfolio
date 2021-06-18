"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blogpost/', include('blogpost.urls'))
"""
# from . import settings
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from blogpost import views as blogviews
from project import views as projectviews
from core.views import index

router = routers.DefaultRouter()
router.register(r'blogposts', blogviews.BlogpostView, 'blogpost')
router.register(r'projects', projectviews.ProjectView, 'project')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('tinymce/', include('tinymce.urls')),
    re_path('(^(?!(api|admin)).*$)',
            TemplateView.as_view(template_name="build/index.html")),
    ]

# This is only needed when using runserver.
# if settings.DEBUG:
#     urlpatterns += [
#                        url(
#                            r'^media/(?P<path>.*)$', static_views.serve,  # NOQA
#                            {'document_root': settings.MEDIA_ROOT,
#                             'show_indexes': True}
#                        ),
#                    ] + staticfiles_urlpatterns()  # NOQA