from rest_framework import serializers
from rest_framework.serializers import ValidationError
from . models import *



class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model=User
        fields = ('id','username','email','password')

    def validate(self, attrs):

        email = attrs.get('email')
        username = attrs.get('username')


        if User.objects.filter(email=email).exists():
            raise ValidationError({'email':('email already exists')})
        if User.objects.filter(username=username).exists():
            raise ValidationError({'usernae':('username taken')})
        return super().validate(attrs)
    

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ('id','username','email')

    
   
    


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'
      

       
    
    
   
