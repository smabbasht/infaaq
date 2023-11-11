from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, LoginSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LoginSerializer
