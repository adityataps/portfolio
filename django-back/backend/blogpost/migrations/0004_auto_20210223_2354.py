# Generated by Django 3.1.6 on 2021-02-24 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogpost', '0003_blogpost_topic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='topic',
            field=models.IntegerField(choices=[(0, 'Unsorted'), (1, 'Food'), (2, 'Programming'), (3, 'Lifestyle'), (4, 'Opinion'), (5, 'TV and Movies'), (6, 'Gaming'), (7, 'Art'), (8, 'DIY'), (9, 'LeetCode and HackerRank'), (10, 'Interviews'), (11, 'Podcasts'), (12, 'Books and Literature'), (13, 'Reviews'), (14, 'Travel')], default=0),
        ),
    ]
