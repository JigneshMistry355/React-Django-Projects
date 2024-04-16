from django.db import models

# Create your models here.
class BlackcofferData(models.Model):
    end_year = models.CharField(max_length=255)
    intensity = models.CharField(null=True,blank=True, max_length=255)
    sector = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    insight = models.CharField(max_length=255)
    url = models.URLField(max_length=1000)
    region = models.CharField(max_length = 255)
    start_year = models.CharField(max_length = 4)
    impact = models.CharField(max_length = 255)
    added = models.CharField(max_length = 255)
    published = models.CharField(max_length = 255)
    country = models.CharField(max_length = 255)
    relevance = models.CharField(max_length = 50)
    pestle = models.CharField(max_length = 255)
    source = models.CharField(max_length = 255)
    title = models.CharField(max_length = 355)
    likelihood = models.CharField(max_length = 50)
 

