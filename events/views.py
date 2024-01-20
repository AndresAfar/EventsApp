from django.shortcuts import render

#from .serializer import *
#from .models import *
#from rest_framework.views import APIView
#from rest_framework.response import Response

#class EventView(APIView):
#    def get(self, request):
#        Event.objects.all()

from rest_framework import viewsets
from .serializer import EventSerializer
from .models import Event

# Create your views here.
class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()