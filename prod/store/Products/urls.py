from django.contrib import admin
from django.urls import path
from .views import ProductList
urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', ProductList.as_view(), name='product-list'),  # GET: Fetch all products, POST: Create a product
    path('products/<int:pk>/', ProductList.as_view(), name='product-detail'),  # GET, PUT, DELETE a specific product
]
