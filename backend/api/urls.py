from django.urls import path
from . views import *
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView



urlpatterns=[
    
    path('rentals',RentalsView.as_view(),name='rentals'),
    path('rentals/<int:id>',AdminRentalsView.as_view(),name='a_rentals'),
    path('users',UsersView.as_view(),name='users'),
    path('movie/<int:id>',MovieView.as_view(),name='movie'),
    path('movies',MoviesView.as_view(),name='movies'),
    path('login',LoginView.as_view(),name='login'),
    path('register',RegistrationView.as_view(),name='register'),
    path('refresh-token', TokenRefreshView.as_view(), name='refreshtoken'),
    

]