# Домашнє завдання до Теми Основи об’єктно-орієнтованого програмування

У цьому завданні ви моделюєте невелику систему, схожу на ті, з якими стикаються розробники в реальних проєктах. Завдяки цьому попрактикуєтесь у застосуванні ключових принципів ООП — інкапсуляції, композиції, наслідування і поліморфізму — у зв’язному, життєвому контексті.

## Опис завдання

Вам потрібно реалізувати модель бібліотеки з підтримкою об'єктів: книги, автори, фізичні примірники, читачі, бібліотека як агрегатор. Основна мета — реалізувати предметну область з використанням ключових понять ООП у TypeScript.

## Очікувана функціональність

### Основні класи:

- **`Author`** зберігає ім’я та список написаних книг.
- **`Book`** реалізує `AbstractBook`, містить назву, рік, автора.
- **`EBook`** реалізує `AbstractBook`, додає поле `url`.
- **`Copy`** містить посилання на книгу та прапорець `isAvailable`.
- **`Reader`** має унікальний `id`, ім’я та список позичених копій.
- **`Library`** надає методи для:
  - додавання книг, авторів, копій, читачів
  - отримання вільних копій
  - пошуку книг за автором
- **`BorrowService`** окремий сервіс для позичання книги читачу `borrow(reader: Reader, copy: Copy)`.

---

# HW01 — OOP Fundamentals

In this assignment you model a small system similar to those developers encounter in real projects. It gives you practice applying key OOP principles — encapsulation, composition, inheritance, and polymorphism — in a coherent, real-world context.

## Assignment description

You need to implement a library model supporting the following objects: books, authors, physical copies, readers, and the library itself as an aggregator. The primary goal is to model the domain using key OOP concepts in TypeScript.

## Expected functionality

### Core classes:

- **`Author`** stores a name and a list of authored books.
- **`Book`** extends `AbstractBook`, contains a title, year, and author.
- **`EBook`** extends `AbstractBook`, adds a `url` field.
- **`Copy`** holds a reference to a book and an `isAvailable` flag.
- **`Reader`** has a unique `id`, a name, and a list of borrowed copies.
- **`Library`** provides methods for:
  - adding books, authors, copies, and readers
  - retrieving available copies
  - searching books by author
- **`BorrowService`** — a separate service for lending a book to a reader: `borrow(reader: Reader, copy: Copy)`.

## How to run

```bash
npm install
npx ts-node src/main.ts
```

## Expected output

```
Attempting to borrow copy1...
Borrow result: true
Attempting to borrow copy1 again...
Borrow result: false
Attempting to return copy1...
Copy1 is available: true

Book descriptions:
Physical book "The Great Book" by John Doe (2020)
E-book "Digital Book" by John Doe (2021) - Available at: https://example.com/ebook
```
