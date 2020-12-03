from django.urls import path
from . import views
urlpatterns = [
    path('', views.principal, name='principal'),
    path('about/', views.about, name='about'),
    path('login/', views.login, name='login'),
    path('logout', views.logout),
    path('register/', views.register, name='register'),
    path('mantenedor/', views.mantenedor, name='mantenedor'),
    path('validar_usuario', views.validar_usuario, name='validar_usuario')
    

]