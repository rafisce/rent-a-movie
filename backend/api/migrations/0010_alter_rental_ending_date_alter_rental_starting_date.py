# Generated by Django 4.2.1 on 2023-05-29 01:48

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_rental_ending_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rental',
            name='ending_date',
            field=models.TimeField(default=datetime.datetime(2023, 6, 5, 1, 48, 41, 289643, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='rental',
            name='starting_date',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
    ]
