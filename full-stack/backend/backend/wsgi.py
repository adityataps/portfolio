"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os
import sys
from django.core.wsgi import get_wsgi_application

sys.path.append("../")
os.environ.setdefault("PYTHON_EGG_CACHE", "../egg_cache")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
application = get_wsgi_application()
