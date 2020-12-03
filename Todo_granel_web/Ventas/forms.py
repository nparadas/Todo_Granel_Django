from django import forms

from .models import Usuario


class PlayerForm(forms.ModelForm):
    class Meta:
        model = Player
        fields = ['contrasena']
        widgets = {'contrasena': forms.HiddenInput()}