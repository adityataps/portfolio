# Generated by Django 3.1.6 on 2021-02-24 06:35

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('blogpost', '0007_remove_blogpost_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='content',
            field=tinymce.models.HTMLField(default=''),
            preserve_default=False,
        ),
    ]
