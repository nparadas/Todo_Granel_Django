from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login as do_login
from django.contrib.auth import logout as do_logout
from django.http import JsonResponse
from django.contrib.auth import logout as do_logout
from django.contrib.auth.decorators import login_required
# Create your views here.
def about(request):
    return render(request, 'Ventas/about.html', {})



def login(request):
    # Creamos el formulario de autenticación vacío
    form = AuthenticationForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = AuthenticationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            # Recuperamos las credenciales validadas
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            # Verificamos las credenciales del usuario
            user = authenticate(username=username, password=password)

            # Si existe un usuario con ese nombre y contraseña
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return render(request, 'Ventas/mantenedor.html', {})

    # Si llegamos al final renderizamos el formulario
    return render(request, "Ventas/login.html", {'form': form})

def register(request):
    # Creamos el formulario de autenticación vacío
    form = UserCreationForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = UserCreationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():

            # Creamos la nueva cuenta de usuario
            user = form.save()

            # Si el usuario se crea correctamente 
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return render(request, 'Ventas/mantenedor.html', {})

    # Si queremos borramos los campos de ayuda
    form.fields['username'].help_text = None
    form.fields['password1'].help_text = None
    form.fields['password2'].help_text = None

    # Si llegamos al final renderizamos el formulario
    return render(request, "Ventas/register.html", {'form': form})

def mantenedor(request):
    # Si estamos identificados devolvemos la portada
    if request.user.is_authenticated:
        return render(request, 'Ventas/mantenedor.html', {})
    # En otro caso redireccionamos al login
    return redirect('/login')
    

def principal(request):
    return render(request, 'Ventas/principal.html', {})

def logout(request):
    # Finalizamos la sesión
    do_logout(request)
    # Redireccionamos a la portada
    return redirect('/')

def validar_usuario(request):
    """Check username availability"""
    correo = request.GET.get('usuario', None)
    password = request.GET.get('pass', None)
    if len(list(Usuario.objects.filter(correo= correo).values())) == 1:
        response = {
            'is_valid': 'true'
        }
        return JsonResponse(response)
    else:
        response = {
            'is_taken': len(list(Usuario.objects.filter(correo= correo).values()))
        }
        return JsonResponse(Permission.objects.all().values)