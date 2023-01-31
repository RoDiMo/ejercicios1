from django.db import models

# Create your models here.


class Contrasenias(models.Model):
    contrasenia1 = models.CharField(max_length=50)
    contrasenia2 = models.CharField(max_length=50)
