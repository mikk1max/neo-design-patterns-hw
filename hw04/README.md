# Домашнє завдання до Теми 4

### Опис завдання

У цьому домашньому завданні необхідно опрацювати три окремі приклади застосування породжувальних патернів: Одинак, Будівельник та Прототип.

Кожен приклад подано як реалістичну задачу з практичного TypeScript-контексту. Ваше завдання — проаналізувати початковий код та застосувати відповідний патерн, переписавши реалізацію.

## Структура проєкту

```
src/
├── builder/          # Builder pattern implementation
│   ├── DocumentBuilder.ts
│   └── main.ts
├── prototype/        # Prototype pattern implementation
│   └── main.ts
└── singleton/        # Singleton pattern implementation
    └── main.ts
```

## Запуск

1. Встановити залежності:

```bash
npm install
```

2. Запустити приклад Builder патерну:

```bash
npm run builder
```

3. Запустити приклад Prototype патерну:

```bash
npm run prototype
```

4. Запустити приклад Singleton патерну:

```bash
npm run singleton
```

Для розробки з автоматичною перезбіркою:

```bash
npm run dev
```

---

# HW04 — Creational Patterns: Singleton, Builder & Prototype

This assignment covers three separate examples of creational patterns: Singleton, Builder, and Prototype. Each example is presented as a realistic task in a TypeScript context. Your job is to analyse the starter code and apply the appropriate pattern by rewriting the implementation.

## Project structure

```
src/
├── builder/    # Builder pattern implementation
├── prototype/  # Prototype pattern implementation
└── singleton/  # Singleton pattern implementation
```

## How to run

```bash
npm install
npm run builder    # Builder example
npm run prototype  # Prototype example
npm run singleton  # Singleton example
npm run dev        # Watch mode
```
