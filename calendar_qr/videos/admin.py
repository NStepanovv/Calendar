from django.contrib import admin
from .models import WeeklyVideo

@admin.register(WeeklyVideo)
class WeeklyVideoAdmin(admin.ModelAdmin):
    list_display = ('week_number', 'video_file', 'release_date')
    list_filter = ('release_date',)
    search_fields = ('week_number', 'video_file')