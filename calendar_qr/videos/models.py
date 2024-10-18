from django.db import models
from django.utils import timezone

class WeeklyVideo(models.Model):
    week_number = models.PositiveIntegerField(unique=True)
    video_file = models.FileField(upload_to='videos/', null=True, blank=True)  # Разрешаем null и пустые значения
    release_date = models.DateField()

    def __str__(self):
        return f"Week {self.week_number}: {self.video_file.url}"

    def is_available(self):
        from django.utils import timezone
        return timezone.now().date() >= self.release_date