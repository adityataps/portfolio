from django.db import models
from tinymce.models import HTMLField
from blogpost.topics import *

# Create your models here.

class Blogpost(models.Model):
    title = models.CharField(max_length=150)
    date = models.DateTimeField(auto_now_add=True)
    topic = models.IntegerField(choices=TOPIC_CHOICES, default=0)
    subtopic = models.CharField(max_length=120)
    content = HTMLField()

    def _str_(self):
        return self.title