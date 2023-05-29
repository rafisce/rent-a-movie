from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime,timedelta
from django.utils.timezone import now



# Create your models here.


class Movie(models.Model):

    title = models.CharField(max_length=150)
    description = models.CharField(max_length=2000)
    rating = models.FloatField()
    release_date = models.CharField(max_length=11)
    popularity = models.FloatField()
    img=models.CharField(max_length=300)
    
    def __repr__(self) -> str:
        return f'<Movie {self.id}>'
    


class Rental(models.Model):
    movie_id = models.IntegerField()
    duration = models.IntegerField()
    starting_date = models.DateTimeField(default=now)
    ending_date = models.DateTimeField(default=now()+timedelta(days=7))
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    

    def __repr__(self) -> str:
        return f'<Rental {self.id}>'

