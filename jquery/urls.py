from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from jquery import views


urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('prueba/', views.prueba, name='prueba'),
    path('dom/', views.dom, name='dom'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)