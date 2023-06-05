# Generated by Django 4.2.1 on 2023-06-05 18:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_movie_active_alter_rental_ending_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='description',
            field=models.CharField(default='', max_length=2000),
        ),
        migrations.AlterField(
            model_name='movie',
            name='img',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='movie',
            name='popularity',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='movie',
            name='rating',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.CharField(default='', max_length=11),
        ),
        migrations.AlterField(
            model_name='movie',
            name='title',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AlterField(
            model_name='rental',
            name='ending_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 12, 21, 12, 30, 97935)),
        ),
        migrations.AlterField(
            model_name='rental',
            name='starting_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 5, 21, 12, 30, 97935)),
        ),
    ]
