# Домашнє завдання до Теми Породжувальні патерни: Фабрика й Абстрактна фабрика

## Опис завдання

Необхідно реалізувати імітаційну архітектуру платіжної системи, яка підтримує кілька провайдерів: `Stripe`, `PayPal` і `ApplePay`. Кожен провайдер реалізує однакову функціональність: `authorize → capture → refund`.

Завдання полягає в застосуванні патернів Factory Method та Abstract Factory, щоб:

-   відокремити логіку створення об’єктів;
-   спростити розширення системи новими провайдерами;
-   приховати використання `new` за фабричним шаром.

Це завдання не передбачає використання реальних платіжних систем чи SDK. Реалізація платіжних сервісів є імітацією і виконується через `console.log`.

Приклад:

```ts
console.log(`[Stripe] Authorizing $${amount}`);
...
console.log(`[ApplePay] Refunding transaction ${transactionId}`);
```

---

## Структура проєкту

```
/src
  /core
    PaymentProvider.ts        # Інтерфейс платіжного провайдера
    PaymentProviderFactory.ts # Інтерфейс фабрики провайдерів
  /providers
    /stripe
      StripePaymentProvider.ts # Реалізація Stripe провайдера
      StripeFactory.ts         # Фабрика для Stripe
    /paypal
      PaypalPaymentProvider.ts # Реалізація PayPal провайдера
      PaypalFactory.ts         # Фабрика для PayPal
    /apple
      ApplePaymentProvider.ts  # Реалізація Apple Pay провайдера
      AppleFactory.ts          # Фабрика для Apple Pay
  /app
    PaymentContext.ts          # Контекст для роботи з провайдерами
  main.ts                      # Приклад використання
package.json
tsconfig.json
```

---

## Застосовані патерни

### ✅ Factory Method

-   Кожен платіжний провайдер має свою окрему фабрику (StripeFactory, PaypalFactory, AppleFactory)
-   Фабрики реалізують спільний інтерфейс `PaymentProviderFactory`
-   Вся логіка створення об’єктів захована всередині відповідної фабрики

### ✅ Abstract Factory

-   `PaymentProviderFactory` — це абстрактна фабрика, що визначає інтерфейс для створення об’єкта `PaymentProvider`
-   Абстрактна фабрика забезпечує єдиний підхід до створення сімейства пов’язаних об'єктів (в даному випадку — платіжних сервісів)
-   Дозволяє легко додати нового провайдера, реалізувавши лише нову фабрику та клас провайдера

---

## Інструкція запуску проєкту

Перед запуском переконайтесь, що у вас встановлено `ts-node`.

```bash
npm install -g ts-node typescript
```

### ▶️ Запуск з Stripe провайдером

```bash
npx ts-node src/main.ts stripe
```

Очікуваний вивід:

```
[Stripe] Authorizing $100
[Stripe] Capturing transaction 4g7rfa
[Stripe] Refunding transaction 4g7rfa
```

---

### ▶️ Запуск з PayPal провайдером

```bash
npx ts-node src/main.ts paypal
```

Очікуваний вивід:

```
[PayPal] Authorizing $100
[PayPal] Capturing transaction 4g7rfa
[PayPal] Refunding transaction 4g7rfa
```

---

### ▶️ Запуск з Apple Pay провайдером

```bash
npx ts-node src/main.ts apple
```

Очікуваний вивід:

```
[ApplePay] Authorizing $100
[ApplePay] Capturing transaction 4g7rfa
[ApplePay] Refunding transaction 4g7rfa
```

---

## ✅ Очікуваний результат

-   Усі класи `XxxPaymentProvider` реалізують інтерфейс `PaymentProvider`
-   Усі класи `XxxFactory` реалізують інтерфейс `PaymentProviderFactory`
-   Клас `PaymentContext` взаємодіє з провайдерами через інтерфейс
-   Весь код не використовує `new` поза фабриками
-   Проєкт легко масштабувати додаванням нових провайдерів без зміни існуючого коду
