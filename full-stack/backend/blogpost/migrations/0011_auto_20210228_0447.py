# Generated by Django 3.1.6 on 2021-02-28 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogpost', '0010_auto_20210224_1732'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
