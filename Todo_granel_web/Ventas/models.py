from django.db import models

# Create your models here.
class Categoria(models.Model):
    """
    Modelo que representa un Tipo de producto (p. ej. Legumbres, Cereales etc.).
    """
    name = models.CharField(max_length=200, help_text="Ingrese el nombre de la Categoria")
    
    def __str__(self):
        """
        Cadena que representa a la instancia particular del modelo (p. ej. en el sitio de Administración)
        """
        return self.name

class Producto(models.Model):
    """
    Modelo que representa un Producto (p. ej. Lenteja, Arroz, Mani etc.).
    """
    name = models.CharField(max_length=200, help_text="Ingrese el nombre del Productos")
    kilos = models.IntegerField(max_length=200, help_text="Ingrese el nombre del Productos")
    precio = models.CharField(max_length=200, help_text="Ingrese el nombre de la especificacion")
    cantidad = models.CharField(max_length=200, help_text="Ingrese url de la imagen")    
    def __str__(self):
        """
        Cadena que representa a la instancia particular del modelo (p. ej. en el sitio de Administración)
        """
        return self.name


