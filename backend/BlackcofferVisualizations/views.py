from django.shortcuts import render
import json, requests 
from BlackcofferVisualizations.models import BlackcofferData
from django.http import HttpResponse, JsonResponse
from .serializers import BlackcofferDataSerializer
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt

 

# Create your views here.
@csrf_exempt
def load_data(request):
    json_file_path = r'C:\Users\Jignesh\Desktop\jsondata.json'
    with open(json_file_path, encoding='utf-8') as f:
        data = json.load(f)
        for item in data:
            BlackcofferData.objects.create(
                end_year = item['end_year'],          
                intensity = item['intensity'],
                sector = item['sector'],         
                topic = item['topic'],      
                insight = item['insight'],         
                url = item['url'],
                region = item['region'],
                start_year = item['start_year'],
                impact = item['impact'],
                added = item['added'],
                published = item['published'],
                country = item['country'],
                relevance = item['relevance'],
                pestle = item['pestle'],
                source = item['source'],
                title = item['title'],
                likelihood = item['likelihood'],
            ) 

            # api_url = 'http://localhost:8000/json/load-data/'   
            # response = requests.post(api_url, json=item)
            # if response.status_code == 200:
            #     print("data sent to API successfully")
            # else:
            #     print("data not sent")

    # return JsonResponse({'message':'Data loaded and sent to API'})


    return HttpResponse('Data loaded successfully')

# class CreateData(generics.CreateAPIView):
#     queryset = BlackcofferData.objects.all()
#     serializer_class = BlackcofferDataSerializer

class ListData(generics.ListAPIView):
    queryset = BlackcofferData.objects.all()
    serializer_class = BlackcofferDataSerializer
