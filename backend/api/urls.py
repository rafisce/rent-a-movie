from django.urls import path
from . views import *
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView



urlpatterns=[
    # path('some',SomeView.as_view(),name='some'),
    path('rentals',RentalsView.as_view(),name='rentals'),
    path('movies',MoviesView.as_view(),name='movies'),
    path('login',LoginView.as_view(),name='login'),
    path('register',RegistrationView.as_view(),name='register'),
    path('refresh-token', TokenRefreshView.as_view(), name='refreshtoken'),

]