# Generated by Django 4.2.1 on 2023-05-30 03:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_rental_ending_date_alter_rental_starting_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rental',
            name='ending_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 6, 6, 13, 40, 148564)),
        ),
        migrations.AlterField(
            model_name='rental',
            name='starting_date',
            field=models.DateTimeField(default='30/05/2023, 06:13:40'),
        ),
    ]
