from django.urls import path
from . import views
from .views import ListData

urlpatterns = [
    path('load-data/', views.load_data, name="load-json-data" ),
    path('view-data/', ListData.as_view(), name = "view-data"),
]