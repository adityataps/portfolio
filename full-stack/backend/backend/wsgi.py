"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os
import sys
# from django.core.wsgi import get_wsgi_application

sys.path.append("/opt/bitnami/portfolio/full-stack/backend")
sys.path.append("/opt/bitnami/portfolio/venv/lib/python3.8/site-packages")
os.environ.setdefault("PYTHON_EGG_CACHE", "/opt/bitnami/portfolio/full-stack/backend/egg_cache")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
