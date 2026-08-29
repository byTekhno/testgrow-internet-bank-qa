# Настройка на рабочем столе (Windows)

Репозиторий на GitHub: **https://github.com/byTekhno/testgrow-internet-bank-qa**

Код проекта собран в Cloud Agent. Перенеси его в свой GitHub **один раз** с ноутбука — дальше работай как с Sauce Demo.

---

## Вариант A — рекомендуется (PowerShell или CMD)

Открой **PowerShell** или **Терминал** в Cursor (**Terminal → New Terminal**) и выполни:

```powershell
cd $env:USERPROFILE\Desktop
git clone https://origin.cursor.com/git/andrew-hitch/tmp-1b2f381a38a340bc.git testgrow-internet-bank-qa
cd testgrow-internet-bank-qa
git remote set-url origin https://github.com/byTekhno/testgrow-internet-bank-qa.git
git push -u origin main
```

Папка на рабочем столе:

```
C:\Users\<ТвоёИмя>\Desktop\testgrow-internet-bank-qa\
```

### Открыть в Cursor

1. **File → Open Folder…**
2. Выбери `Desktop\testgrow-internet-bank-qa`

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

## Вариант B — GitHub Desktop

1. Установи [GitHub Desktop](https://desktop.github.com/) (если ещё нет).
2. **File → Clone repository** → URL: `https://github.com/byTekhno/testgrow-internet-bank-qa`
3. Local path: `Desktop\testgrow-internet-bank-qa`

Если репозиторий на GitHub **пустой** — сначала выполни **Вариант A** (push из PowerShell), чтобы файлы появились на GitHub.

---

## Если `git` не найден

Установи Git for Windows: https://git-scm.com/download/win  
Перезапусти Cursor и снова выполни команды из варианта A.

---

## Если `git push` просит пароль

Используй **GitHub Personal Access Token** как пароль (не пароль аккаунта GitHub):

GitHub → Settings → Developer settings → Personal access tokens

---

## После настройки

| Действие | Файл |
|----------|------|
| Тест-кейсы | `test-cases\01-authorization.md` … `06-regression.md` |
| Тестовые данные | `test-data\clients.md` |
| Тест-план | `test-plans\TestGrow_Internet_Bank_Test_Plan.md` |
| Шаблон бага | `bug-reports\bug-report-template.md` |
| ТЗ | `requirements\ibrequirements.docx` |

---

## Проверка

На GitHub должны появиться папки `test-plans`, `test-cases`, `bug-reports` и др.:

https://github.com/byTekhno/testgrow-internet-bank-qa
