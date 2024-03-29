# Generated by Django 4.2.7 on 2023-12-11 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('dateEvent', models.DateField()),
                ('timeEvent', models.TimeField()),
                ('locationEvent', models.CharField(max_length=150)),
                ('typeEvent', models.CharField(choices=[('SOL', 'Social'), ('CUL', 'Cultural'), ('DEP', 'Deportivo'), ('EMP', 'Empresarial'), ('ACA', 'Academico'), ('REL', 'Religioso'), ('POL', 'Politico'), ('OTR', 'Otros')], default='SOL', max_length=3)),
                ('description', models.TextField(blank=True)),
                ('status', models.BooleanField(default=False)),
            ],
        ),
    ]
