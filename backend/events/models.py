from django.db import models

# Create your models here.


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    desc = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=50)
    n_attandees = models.IntegerField()
    raised_percentage = models.IntegerField()
    contact = models.IntegerField(unique=True)
    image = models.CharField(max_length=50, default='default.png')

    def __str__(self):
        return self.name
