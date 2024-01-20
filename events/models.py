from django.db import models

# Create your models here.


class Event(models.Model):

    class typeEvents(models.TextChoices):
     # Actual value ↓      # ↓ Displayed on Django Admin  
        SOCIAL = 'SOL', 'Social'
        CULTURAL = 'CUL', 'Cultural'
        DEPORTIVO = 'DEP', 'Deportivo'
        EMPRESARIAL = 'EMP', 'Empresarial'
        ACADEMICO = 'ACA', 'Academico'
        RELIGIOSO = 'REL', 'Religioso'
        POLITICO = 'POL', 'Politico'
        OTROS = 'OTR', 'Otros'

    title = models.CharField(max_length=150)
    dateEvent = models.DateField()
    timeEvent = models.TimeField()
    locationEvent = models.CharField(max_length=150)
    typeEvent = models.CharField(
        max_length=3,
        choices=typeEvents.choices,
        default=typeEvents.SOCIAL
    )
    description = models.TextField(blank=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.title