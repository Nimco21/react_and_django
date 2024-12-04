from rest_framework import serializers
from .models import Products
class Producstserializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields='__all__' #columns