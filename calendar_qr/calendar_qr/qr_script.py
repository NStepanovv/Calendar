import qrcode
from django.conf import settings

def generate_qr_codes():
    #base_url = 'http://localhost:3000/week/'  # Базовый URL для видео
    base_url = 'http://192.168.1.49:3000/week/'  # Базовый URL для видео
    output_dir = 'calendar_qr/media/qrcodes/'  # Папка для сохранения QR-кодов

    # Генерируем QR-коды для 52 недель
    for week in range(1, 5):
        url = f"{base_url}{week}"  # Ссылка для каждой недели
        img = qrcode.make(url)
        img.save(f'{output_dir}week_{week}.png')  # Сохраняем QR-код как PNG


# Вызовите функцию для генерации QR-кодов
generate_qr_codes()