from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from .models import TodoItem
from .serializers import TodoItemSerializer, RegisterSerializer


class TodoItemViewSet(viewsets.ModelViewSet):
    serializer_class = TodoItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return TodoItem.objects.filter(user=self.request.user).order_by('-created')
    
class RegisterView(CreateAPIView):
    user = get_user_model()
    queryset = user.objects.all()
    serializer_class = RegisterSerializer