from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Products
from .serializers import Producstserializer
from rest_framework.parsers import MultiPartParser, FormParser

class ProductList(APIView):
    parser_classes = [MultiPartParser, FormParser]

    # GET: Fetch all products or a single product if `pk` is provided
    def get(self, request, pk=None):
        if pk:
            product = get_object_or_404(Products, pk=pk)
            serializer = Producstserializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            products = Products.objects.all()
            serializer = Producstserializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    # POST: Create a new product
    def post(self, request):
        serializer = Producstserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # PUT: Update an existing product
    def put(self, request, pk):
        product = get_object_or_404(Products, pk=pk)  # Use `get_object_or_404` here for consistency
        serializer = Producstserializer(product, data=request.data, partial=True)  # partial=True for partial updates
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE: Delete a product
    def delete(self, request, pk):
        product = get_object_or_404(Products, pk=pk)
        product.delete()
        return Response({"message": "Product deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
