from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    timeframe = models.CharField(max_length=120, default="")
    link = models.URLField()

    def _str_(self):
        return self.title