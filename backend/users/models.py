from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    role = models.IntegerField()
    phone = models.IntegerField(unique=True, null=True)
    profession = models.CharField(max_length=50, null=True)
    address = models.CharField(max_length=50, null=True)
    city = models.CharField(max_length=50, null=True)
    profile = models.CharField(max_length=100, null=True)
    # image = models.ImageField(upload_to='images/', default='images/default.png')

    def __str__(self):
        return self.name
