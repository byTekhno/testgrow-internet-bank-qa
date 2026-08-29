# Настройка на рабочем столе

Репозиторий на GitHub: **https://github.com/byTekhno/testgrow-internet-bank-qa**

Код проекта собран в Cloud Agent. Перенеси его в свой GitHub **один раз** с Mac — дальше работай как с Sauce Demo.

---

## Вариант A — рекомендуется (2 минуты)

Открой **Terminal** на Mac и выполни:

```bash
cd ~/Desktop
git clone https://origin.cursor.com/git/andrew-hitch/tmp-1b2f381a38a340bc.git testgrow-internet-bank-qa
cd testgrow-internet-bank-qa
git remote set-url origin https://github.com/byTekhno/testgrow-internet-bank-qa.git
git push -u origin main
```

Если `git push` попросит логин — используй **GitHub Personal Access Token** как пароль (не обычный пароль GitHub).

Папка на Desktop:

```
~/Desktop/testgrow-internet-bank-qa/
```

### Открыть в Cursor

1. **File → Open Folder…**
2. Выбери `Desktop/testgrow-internet-bank-qa`

В Explorer слева:

```
test-plans/
test-cases/
bug-reports/
screenshots/
test-data/
requirements/
```

---

## Вариант B — если вариант A не клонирует Cursor Origin

```bash
cd ~/Desktop
git clone https://github.com/byTekhno/testgrow-internet-bank-qa.git
cd testgrow-internet-bank-qa
```

Скачай архив с файлами из агента Cursor (если доступен в UI) или попроси агента снова — после пуша с твоей машины репозиторий будет полный.

Либо вручную скопируй структуру из GitHub после успешного `git push` из варианта A.

---

## Вариант C — GitHub Desktop

1. **Clone repository** → URL: `https://github.com/byTekhno/testgrow-internet-bank-qa`
2. Local path: `Desktop/testgrow-internet-bank-qa`
3. Если репозиторий пустой — сначала выполни вариант A (push с Terminal)

---

## После настройки

| Действие | Файл |
|----------|------|
| Тест-кейсы в Excel | `test-cases/TestGrow_Internet_Bank_Test_Cases.csv` |
| Тест-план | `test-plans/TestGrow_Internet_Bank_Test_Plan.md` |
| Шаблон бага | `bug-reports/bug-report-template.md` |
| ТЗ | `requirements/ibrequirements.docx` |

---

## Проверка

На GitHub должны быть видны папки `test-plans`, `test-cases`, `bug-reports`, и т.д.:

https://github.com/byTekhno/testgrow-internet-bank-qa
