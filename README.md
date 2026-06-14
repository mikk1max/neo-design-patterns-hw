# Домашнє завдання до Теми Структурні патерни: Декоратор та Замісник

### **Опис завдання**

Мета домашнього завдання — навчитися поєднувати два структурні патерни у спрощеній моделі сервісу повідомлень:

- **Декоратор (Decorator)** — дозволяє розширювати функціональність сервісу повідомлень без зміни його коду;
- **Замісник (Proxy)** — обмежує частоту звернень до сервісу, імітуючи rate-limit поведінку, як у реальних API.

Ваше завдання — реалізувати консольну утиліту, яка:

- надає інтерфейс `send(message: string): void`;
- надсилає повідомлення через базовий сервіс в термінал;
- обгортає цей сервіс у декоратори, які змінюють текст повідомлення;
- застосовує Замісник, що блокує надсилання повідомлень, якщо вони надходять надто часто;
- демонструє розмежування відповідальностей, відкритість до розширення і чітке дотримання структурних патернів.

## Встановлення та запуск

1. Встановлення залежностей:

```bash
npm install
```

2. Запуск демонстрації:

```bash
npm start
```

## Очікуваний результат

```
Тестуємо систему анти-спаму:
[2024-02-20 15:30:00] ПРИВІТ! ЯК СПРАВИ?
[RateLimit] skipped

Після очікування 1 секунди:
[2024-02-20 15:30:01] ЦЕ ПОВІДОМЛЕННЯ ВЖЕ ПРОЙДЕ, БО МИ ПОЧЕКАЛИ
```

## Структура проекту

- `src/IMessageService.ts` - інтерфейс сервісу повідомлень
- `src/MessageService.ts` - основний сервіс з декораторами
- `src/decorators.ts` - TypeScript декоратори для модифікації повідомлень
- `src/RateLimitProxy.ts` - фабрична функція для створення проксі
- `src/main.ts` - демонстрація роботи системи

## Використані патерни

1. **Декоратори** (TypeScript Stage 3):

   - Модифікують поведінку методу `send` без зміни його коду
   - Використовують сучасний синтаксис декораторів
   - Реалізовані з типобезпечним кодом

2. **Proxy** (вбудований JavaScript Proxy):
   - Перехоплює виклики методів об'єкта
   - Реалізує захист від спаму через обмеження частоти
   - Забезпечує прозорий доступ до оригінального об'єкта

---

# HW06 — Structural Patterns: Decorator & Proxy

## Assignment description

The goal is to learn how to combine two structural patterns in a simplified messaging service model:

- **Decorator** — extends the service's functionality without modifying its code.
- **Proxy** — limits the rate of calls to the service, simulating rate-limit behaviour found in real APIs.

Implement a CLI utility that provides a `send(message: string): void` interface, sends messages through a base service, wraps it in decorators that transform the message text, and applies a Proxy that blocks messages sent too frequently.

## How to run

```bash
npm install
npm start
```

## Expected output

```
Testing the anti-spam system:
[2024-02-20 15:30:00] HELLO! HOW ARE YOU?
[RateLimit] skipped

After waiting 1 second:
[2024-02-20 15:30:01] THIS MESSAGE WILL GO THROUGH BECAUSE WE WAITED
```
