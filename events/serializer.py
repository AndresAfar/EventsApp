from rest_framework import serializers
from .models import *

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'dateEvent', 'timeEvent', 'locationEvent', 'typeEvent', 'description', 'status')

