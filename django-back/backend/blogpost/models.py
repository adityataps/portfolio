from django.db import models
from tinymce.models import HTMLField
from blogpost.topics import *

# Create your models here.

class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    date = models.DateTimeField(auto_now=True)
    topic = models.IntegerField(choices=TOPIC_CHOICES, default=0)
    content = HTMLField()

    def _str_(self):
        return self.title