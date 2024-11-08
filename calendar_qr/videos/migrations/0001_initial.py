# Generated by Django 5.1.2 on 2024-10-14 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WeeklyVideo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('week_number', models.PositiveIntegerField(unique=True)),
                ('video_url', models.URLField()),
                ('release_date', models.DateField()),
            ],
        ),
    ]
