from rest_framework import serializers
from .models import BlackcofferData

class BlackcofferDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlackcofferData
        fields = ['id', 'end_year','intensity','sector','topic','insight', 'url', 'region', 'start_year', 'impact', 'added', 'published', 'country', 'relevance', 'pestle', 'source', 'title', 'likelihood'] 