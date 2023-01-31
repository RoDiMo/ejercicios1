from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from jquery import views


urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('prueba/', views.prueba, name='prueba'),
    path('muestra_prueba/', views.muestra_prueba, name='muestra_prueba'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)