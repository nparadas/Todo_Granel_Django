# Generated by Django 3.1.3 on 2020-12-03 22:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Ventas', '0006_delete_usuario'),
    ]

    operations = [
        migrations.RenameField(
            model_name='producto',
            old_name='imagen',
            new_name='cantidad',
        ),
        migrations.RenameField(
            model_name='producto',
            old_name='especificacion',
            new_name='precio',
        ),
        migrations.RemoveField(
            model_name='producto',
            name='status',
        ),
    ]
