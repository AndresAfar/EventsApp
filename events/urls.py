
from django.urls import path, include
from rest_framework import routers
from events import views

router = routers.DefaultRouter()
router.register(r'events', views.EventView, 'events')

urlpatterns = [
    path("api/", include(router.urls))
]