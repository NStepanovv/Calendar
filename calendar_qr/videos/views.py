from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import WeeklyVideo
from .serializers import WeeklyVideoSerializer
from django.utils import timezone

class WeeklyVideoView(APIView):
    def get(self, request, week_number):
        try:
            video = WeeklyVideo.objects.get(week_number=week_number)
            serializer = WeeklyVideoSerializer(video)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except WeeklyVideo.DoesNotExist:
            return Response({'error': 'Video not found'}, status=status.HTTP_404_NOT_FOUND)
        
class VideoListView(APIView):
    def get(self, request, *args, **kwargs):
        videos = WeeklyVideo.objects.all()  # Получаем все видео
        serializer = WeeklyVideoSerializer(videos, many=True)  # Сериализуем данные
        return Response(serializer.data)
    
class LastAvailableVideoView(APIView):
    def get(self, request, *args, **kwargs):
        current_date = timezone.now().date()
        # Ищем последнее видео, которое было доступно до текущей даты
        latest_video = WeeklyVideo.objects.filter(release_date__lte=current_date).order_by('-release_date').first()

        if latest_video:
            serializer = WeeklyVideoSerializer(latest_video)
            return Response(serializer.data)
        else:
            return Response({'error': 'No video available'}, status=404)