from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from . serializers import *
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
import json


authenticator = JWTAuthentication()



class RegistrationView(APIView):

    def post(self,request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({
                'message':'user created successfully',
                'user':serializer.data
            },status=status.HTTP_201_CREATED)
        else:
            return Response({'errors':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        


class LoginView(APIView):
    def post(self,request):
        user = authenticate(username=request.data['username'],password=request.data['password'])

        if user is not None:
            token = RefreshToken.for_user(user)
            user = User.objects.get(username=user)
            user_serializer = UserSerializer(instance=user)
            user_auth = user_serializer.data
            user_auth.update({  'refresh': str(token),
        'access': str(token.access_token)})
            return Response(user_auth,status=status.HTTP_200_OK)
            
        
        return Response({'message':'bad credentials'},status=status.HTTP_401_UNAUTHORIZED)


class RentalsView(APIView):
    def get(self,request):
        response = authenticator.authenticate(request)
        if response is not None:
            user , token = response
            if Rental.objects.filter(user = token.payload['user_id']).exists():
                rentals = Rental.objects.filter(user = token.payload['user_id'])
                rentals_serializer= RentalSerializer(rentals,many=True)
                return Response({'rentals':rentals_serializer.data})
            return Response({'message':'not found'},status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message':"no token is provided in the header or the header is missing"})
        
    
    def post(self,request):

        response = authenticator.authenticate(request)
        if response is not None:
            print(request.data)
            serializer = RentalSerializer(data=request.data)
            
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'message':'rental created successfully'},status=status.HTTP_201_CREATED)
            return Response({'message':'bad request'},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message':"no token is provided in the header or the header is missing"})
        
class MoviesView(APIView): 

    def get(self,request):
        queryset = Movie.objects.all()
        movies = MovieSerializer(queryset, many=True) 
        return Response(movies.data,status=status.HTTP_200_OK) 
     
    def post(self,request):

        

        # serializer = MovieSerializer(data=request.data,many=True)
        # if serializer.is_valid(raise_exception=True):
        #     serializer.save()
        #     return Response(status=status.HTTP_201_CREATED)
        # else:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)
        
        response = authenticator.authenticate(request)
        if response is not True:
            serializer = MovieSerializer(data=request.data,many=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
        else:
            return Response({'message':"no token is provided in the header or the header is missing"},status=status.HTTP_401_UNAUTHORIZED)
       
    
        

# class SomeView(APIView):

#     def get(self,request):
#         print(request.data)
        
#         response = authenticator.authenticate(request)
#         if response is not None:
#     # unpacking
#             user , token = response
#             print(user + "jkj")
#             print("this is decoded token claims", token.payload)
#             return Response({'token':token.payload})
#         else:
#             return Response({'message':"no token is provided in the header or the header is missing"})

        
#     def post(self,request):

       
#         return Response({'a':1,'b':2},status=status.HTTP_403_FORBIDDEN)
    

