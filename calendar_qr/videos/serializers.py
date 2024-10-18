from rest_framework import serializers
from .models import WeeklyVideo

class WeeklyVideoSerializer(serializers.ModelSerializer):
    is_available = serializers.SerializerMethodField()

    class Meta:
        model = WeeklyVideo
        fields = ['week_number', 'video_file', 'is_available', 'release_date']

    def get_is_available(self, obj):
        return obj.is_available()