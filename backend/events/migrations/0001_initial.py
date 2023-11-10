# Generated by Django 4.2.7 on 2023-11-09 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('desc', models.CharField(max_length=50)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('location', models.CharField(max_length=50)),
                ('n_attandees', models.IntegerField()),
                ('raised_percentage', models.IntegerField()),
                ('contact', models.IntegerField(unique=True)),
            ],
        ),
    ]