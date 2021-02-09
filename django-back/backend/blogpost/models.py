from django.db import models

# Create your models here.

class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    date = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    def _str_(self):
        return self.title