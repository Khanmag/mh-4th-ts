# Название проекта: Система управления библиотекой

## Цель проекта:

Разработать приложение, используя TypeScript и принципы ООП, которое позволит управлять каталогом книг в библиотеке,
добавлять новые книги, редактировать информацию о них, удалять и просматривать списки книг с использованием фильтров.

## Требования к функциональности:

### Функциональность пользователей:

1. Каждый пользователь должен быть представлен отдельным классом со следующими полями, такие как - Имя, email, роль и т.д.
2. Должны быть различные роли пользователей, такие как администратор, библиотекарь и пользователь.
3. Администратор должен иметь права на управление пользователями (добавление, редактироание и удаление пользователей).
4. Библиотекарь должен иметь права на управление каталогом книг (добавление, редактироание и удаление книг).
5. Пользователь должен иметь возможность просматривать каталог книг и осуществлять поиск.

### Управление пользователями:

1. Администратор должен иметь возможность добавлять новых пользователей с указанием основных параметров, таких как Имя,
2. email, роль и т.д.
2. Администратор должен иметь возможность редактировать информацию о пользователях, включая изменение параметров.
3. Администратор должен иметь возможность удалять пользователей.
4. Должна быть возможность отображать полный список пользователей.

### Управление каталогом книг:

1. Библиотекарь должен иметь возможность добавлять новые книги в каталог с указанием основных параметров, таких как
2. название, автор, жанр и год издания.
2. Библиотекарь должен иметь возможность редактировать информацию о книгах, включая изменение параметров.
3. Библиотекарь должен иметь возможность удалять книги из каталога.
4. Должна быть возможность отображать полный список книг в каталоге.

### Поиск книг:

1. Все пользователи должны иметь возможность осуществлять поиск книг по различным параметрам, таким как название, автор, жанр и год издания.
2. Результаты поиска должны отображать список книг, соответствующих критериям поиска.

### \*Дополнительные функции:

1. Пользователи должны иметь возможность добавлять книги в список "Избранное" для отложенного просмотра.
2. Должна быть возможность оставлять отзывы и оценки для прочитанных книг.

## Технические требования:

- Приложение должно быть разработано с использованием TypeScript и принципов ООП.
- Интерфейс для этого задания не требуется, достаточно написание всех необходимых классов и объектов.
- Данные о книгах, пользователях и других сущностях должны хранится в отдельных JSON файлах.

### Дополнительные требования:

Приложение должно быть реализовано с использованием принципов SOLID и должно быть расширяемым для возможной добавления новых функциональностей в будущем.

## План проекта:

1. Анализ требований и составление подробного плана разработки.
2. Разработка базовой архитектуры приложения.
3. Разработка функциональности пользователей.
4. Разработка функциональности управления каталогом книг.
5. Разработка функциональности поиска книг.
6. Реализация дополнительных функций.
