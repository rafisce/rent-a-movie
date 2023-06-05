from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime,timedelta




# Create your models here.


class Movie(models.Model):

    title = models.CharField(max_length=150,default='')
    description = models.CharField(max_length=2000,default='')
    rating = models.FloatField(default=0)
    release_date = models.CharField(max_length=11,default='')
    popularity = models.FloatField(default=0)
    img=models.CharField(max_length=300,default='')
    active = models.BooleanField(default=False)
    
    def __repr__(self) -> str:
        return f'<Movie {self.id}>'
    


class Rental(models.Model):
    movie_id = models.IntegerField()
    movie_title=models.CharField(max_length=200)
    duration = models.IntegerField()
    starting_date = models.DateTimeField(default=datetime.now())
    ending_date = models.DateTimeField(default=datetime.now()+timedelta(days=7))
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    

    def __repr__(self) -> str:
        return f'<Rental {self.id}>'

