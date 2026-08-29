# QA Manual Testing Portfolio — TestGrow Internet Bank

## Project Overview

Ручное тестирование модуля **«Интернет Банк»** ({TEST}GROW BANK) по заданию **practice99** платформы [TestGrow](https://testgrow.ru).

Раздел курса: **«Написание тестов»**. Фокус — модуль перевода между счетами клиента, список счетов, детали счета и реквизиты.

## Application Under Test

| | |
|---|---|
| **Application** | {TEST}GROW BANK (симулятор TestGrow) |
| **Platform** | TestGrow — practice99 |
| **Type** | Demo internet banking web application |
| **Documentation** | `requirements/ibrequirements.docx` |

## Testing Scope

- Авторизация (выбор тестового пользователя)
- Главное меню и навигация
- Список счетов (типы, валюты, таблица)
- Детальная информация по счету и реквизиты
- Перевод между счетами клиента (лимиты, валидации, сообщения)
- Регистрация дефектов в BugTracker TestGrow

## Project Structure

```
├── test-plans/          # Тест-планы
├── test-cases/           # Тест-кейсы (CSV для Excel)
├── bug-reports/          # Баг-репорты и чек-лист
├── screenshots/          # Скриншоты симулятора и дефектов
├── test-data/            # Тестовые клиенты и счета
├── requirements/         # Техническое задание
├── SETUP-DESKTOP.md      # Как склонировать папку на Desktop
└── README.md
```

## Artifacts

| Артефакт | Путь |
|----------|------|
| Тест-план | [test-plans/TestGrow_Internet_Bank_Test_Plan.md](test-plans/TestGrow_Internet_Bank_Test_Plan.md) |
| Тест-кейсы (38) | [test-cases/TestGrow_Internet_Bank_Test_Cases.csv](test-cases/TestGrow_Internet_Bank_Test_Cases.csv) |
| Шаблон баг-репорта | [bug-reports/bug-report-template.md](bug-reports/bug-report-template.md) |
| Чек-лист дефектов | [bug-reports/bug-checklist.md](bug-reports/bug-checklist.md) |
| Тестовые данные | [test-data/](test-data/) |
| ТЗ | [requirements/ibrequirements.docx](requirements/ibrequirements.docx) |
| Скриншоты | [screenshots/](screenshots/) |

## Test Data (online)

[Google Sheets — 15 тестовых клиентов](https://docs.google.com/spreadsheets/d/1IUVQV2zzd8spITAgIt0Hfpn0QZOpvq8Ii1rJiAS-sAA/edit?gid=1977293877#gid=1977293877)

## How to Use This Portfolio

1. Открой `test-cases/TestGrow_Internet_Bank_Test_Cases.csv` в Excel или Google Sheets.
2. Выполни кейсы в симуляторе TestGrow (practice99).
3. Заполни колонки **Actual Result** и **Pass/Fail**.
4. Найденные баги — в BugTracker TestGrow и в `bug-reports/` (по шаблону).
5. Скриншоты дефектов — в `screenshots/`.
6. Отправь задание на проверку в TestGrow.

## Tools

- TestGrow BugTracker (встроенный)
- Google Sheets / Excel (тест-кейсы и тестовые данные)
- Chrome

## Author

Andrew Hitch — QA portfolio project (TestGrow practice99)
