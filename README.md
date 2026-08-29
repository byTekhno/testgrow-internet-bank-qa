# QA-портфолио: TestGrow Internet Bank

Учебный проект ручного тестирования модуля **«Интернет Банк»** ({TEST}GROW BANK) на платформе [TestGrow](https://testgrow.ru) — задание **practice99**.

Цель репозитория — показать, как я проектирую тесты, прогоняю проверки и оформляю дефекты. Формат артефактов — как в [saucedemo-qa](https://github.com/byTekhno/saucedemo-qa): всё в Markdown.

**Объект тестирования:** симулятор {TEST}GROW BANK (TestGrow practice99)  
**Тип:** веб-приложение (интернет-банк)  
**Уровень:** Junior QA, ручное функциональное тестирование

---

## Как смотреть репозиторий

| Раздел | Что внутри |
|---|---|
| [test-plans/](test-plans/) | Тест-план |
| [test-cases/](test-cases/) | Тест-кейсы по модулям (38 шт.) |
| [test-data/clients.md](test-data/clients.md) | 15 клиентов, 121 счёт |
| [bug-reports/](bug-reports/) | Шаблон баг-репорта и чек-лист |
| [test-runs/](test-runs/) | Результаты прогонов (pass/fail) |
| [screenshots/](screenshots/) | Скриншоты симулятора и дефектов |

---

## Тест-кейсы по модулям

| Файл | Модуль | Кейсов |
|---|---|---|
| [01-authorization.md](test-cases/01-authorization.md) | Авторизация | 1 |
| [02-menu.md](test-cases/02-menu.md) | Главное меню | 3 |
| [03-accounts-list.md](test-cases/03-accounts-list.md) | Список счетов | 5 |
| [04-account-details.md](test-cases/04-account-details.md) | Детали счета | 3 |
| [05-transfer.md](test-cases/05-transfer.md) | Перевод между счетами | 25 |
| [06-regression.md](test-cases/06-regression.md) | Регресс | 1 |

---

## Область тестирования

- Авторизация (выбор тестового пользователя)
- Главное меню и навигация
- Список счетов (типы, валюты, таблица)
- Детальная информация по счету и реквизиты
- Перевод между счетами клиента (лимиты, валидации, сообщения)
- Регистрация дефектов в BugTracker TestGrow

---

## Тестовые данные

Основной файл: [test-data/clients.md](test-data/clients.md)  
Онлайн-источник: [Google Sheets — 15 тестовых клиентов](https://docs.google.com/spreadsheets/d/1IUVQV2zzd8spITAgIt0Hfpn0QZOpvq8Ii1rJiAS-sAA/edit?gid=1977293877#gid=1977293877)

---

## Как работать с портфолио

**Первый раз (Windows):** [SETUP-DESKTOP.md](SETUP-DESKTOP.md)

1. Открой нужный файл в [test-cases/](test-cases/).
2. Выполни кейсы в симуляторе TestGrow (practice99).
3. Зафиксируй результаты в [test-runs/](test-runs/) (Pass / Fail / Blocked).
4. Найденные баги — в BugTracker TestGrow и в [bug-reports/](bug-reports/) по шаблону.
5. Скриншоты дефектов — в [screenshots/](screenshots/).
6. Отправь задание на проверку в TestGrow.

---

## Окружение

- Браузер: Google Chrome (актуальная версия)
- Платформа: TestGrow practice99
- ТЗ: `requirements/ibrequirements.docx`

---

## Repository

https://github.com/byTekhno/testgrow-internet-bank-qa

---

## Автор

Andrew Hitch — QA portfolio project (TestGrow practice99)
