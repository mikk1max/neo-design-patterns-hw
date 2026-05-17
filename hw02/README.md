# Домашнє завдання до Теми Принципи проєктування SOLID

У реальних проєктах погана архітектура часто не видно одразу — але з часом вона ускладнює підтримку, тестування та розвиток системи. Це завдання — можливість попрактикуватися у виявленні таких недоліків і вдосконаленні структури проєкту за принципами SOLID. Ви побачите, як через правильні абстракції та інтерфейси код стає зрозумілішим, гнучкішим і готовим до змін.

### Опис завдання

Вам надано приклад простої системи повідомлень, у якій навмисно реалізовано архітектуру, що порушує принципи проєктування SOLID. Ваше завдання — провести архітектурний рефакторинг, дотримуючись принципів SOLID, та реалізувати систему повідомлень, яка може бути масштабовано, легко підтримуваною та модульною.

### Очікуваний результат

- Усі канали повідомлень `Email`, `SMS`, `Push` мають бути окремими сервісами, які реалізують спільний інтерфейс.
- Клас `NotificationService` не повинен знати про конкретні реалізації каналів.
- `Logger` має бути переданим як залежність через інтерфейс.
- Клас `User` більше не викликає логіку повідомлень.
- У `main.ts` повинна бути наочно продемонстрована взаємодія з системою через абстракції.

---

# HW02 — SOLID Design Principles

In real projects, poor architecture is often not obvious at first — but over time it makes the system harder to maintain, test, and evolve. This assignment is an opportunity to practise identifying such flaws and improving project structure according to SOLID principles. You will see how proper abstractions and interfaces make code cleaner, more flexible, and ready for change.

## Assignment description

You are given an example of a simple notification system in which the architecture deliberately violates SOLID principles. Your task is to perform an architectural refactoring following SOLID, producing a notification system that is scalable, easily maintainable, and modular.

## Expected result

- All notification channels (`Email`, `SMS`, `Push`) must be separate services implementing a shared interface.
- The `NotificationService` class must not know about the concrete channel implementations.
- `Logger` must be injected as a dependency through an interface.
- The `User` class no longer invokes notification logic.
- `main.ts` must clearly demonstrate interaction with the system through abstractions.
