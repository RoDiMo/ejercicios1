import json
from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse
from django.shortcuts import render, redirect
from jquery.models import *


# Create your views here.


def inicio(request):
    return render(request, "inicio.html")


def prueba(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:

        if request.method == 'GET':
            contrasenia = list(Contrasenias.objects.all().values())
            return JsonResponse({'context': contrasenia})

        if request.method == 'POST':
            data = json.load(request)
            contrasenia1 = data.get('contraseña1')
            contrasenia2 = data.get('contraseña2')

            contrasenia = Contrasenias(contrasenia1=contrasenia1, contrasenia2=contrasenia2)
            contrasenia.save()

            return JsonResponse({'status': 'Todo added!'})
        return JsonResponse({'status': 'Invalid request'}, status=400)
    else:
        return render(request, "prueba.html",)






def muestra_prueba(request):
    contrasenia = Contrasenias.objects.all()
    return render(request, "muestra_prueba.html", {"contrasenias":contrasenia})
