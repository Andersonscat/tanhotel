# Инструкция по замене изображений

## Шаг 1: Подготовка изображений

Из предоставленных фотографий отеля выберите лучшие:

### Для hero секции (лобби):
- **Выберите:** Изображение лобби/ресторана с деревянными панелями и подвесными светильниками
- **Размер:** 1920x1080px
- **Файл:** `src/assets/images/hotel-lobby.jpg`

### Для стандартного номера:
- **Выберите:** Номер с кроватью с коричневым изголовьем, настенными светильниками и окном
- **Размер:** 800x600px
- **Файл:** `src/assets/images/room-standard.jpg`

### Для люксового номера:
- **Выберите:** Номер с кроватью, рабочим столом, телевизором и стеллажом
- **Размер:** 800x600px
- **Файл:** `src/assets/images/room-deluxe.jpg`

### Для секции "О нас":
- **Выберите:** Современная душевая с черными фитингами
- **Размер:** 800x600px
- **Файл:** `src/assets/images/bathroom.jpg`

## Шаг 2: Замена файлов

1. Скопируйте выбранные изображения в папку `src/assets/images/`
2. Переименуйте их согласно списку выше
3. Убедитесь, что формат файлов - JPG или PNG

## Шаг 3: Проверка

После замены изображений:
1. Сохраните все файлы
2. Откройте браузер и перейдите на http://localhost:5173
3. Проверьте, что изображения отображаются корректно

## Рекомендации по качеству изображений:

- Используйте изображения высокого качества (минимум 72 DPI)
- Убедитесь, что изображения хорошо освещены
- Выбирайте изображения, которые показывают лучшие стороны отеля
- Избегайте изображений с людьми (если не требуется)
- Оптимизируйте размер файлов для быстрой загрузки

## Структура папки images:

```
src/assets/images/
├── hotel-lobby.jpg     # Лобби отеля (hero секция)
├── room-standard.jpg   # Стандартный номер
├── room-deluxe.jpg     # Люксовый номер
├── bathroom.jpg        # Ванная комната (секция "О нас")
└── hotel-hallway.jpg   # Коридор отеля (дополнительно)
``` 