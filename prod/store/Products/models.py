from django.db import models

# Create your models here.
class Products(models.Model):
    Title=models.CharField(max_length=500)
    Image=models.ImageField(upload_to='images')
    Description= models.TextField()
    Price=models.DecimalField(max_digits=10 , decimal_places=2)
    def __str__(self):
        return self.Title 