# Как открыить проект на рабочем столе (как Sauce Demo)

Cloud Agent работает в облаке (`/workspace`). На твой Mac/PC файлы **не попадают автоматически** — нужно один раз склонировать репозиторий на Desktop и открыть папку в Cursor.

## Шаг 1 — Создай репозиторий на GitHub

Выбери один вариант:

### A) Через Cursor (проще)

В интерфейсе этого агента нажми **Create repo** и задай имя, например:

`testgrow-internet-bank-qa`

### B) Вручную на GitHub

1. Открой https://github.com/new
2. Repository name: `testgrow-internet-bank-qa`
3. Public, **без** README (репозиторий пустой)
4. Create repository

Если создал вручную — напиши агенту «запушь в github.com/andrew-hitch/testgrow-internet-bank-qa», он добавит remote и отправит код.

---

## Шаг 2 — Склонируй на рабочий стол

На **Mac** в Terminal:

```bash
cd ~/Desktop
git clone https://github.com/andrew-hitch/testgrow-internet-bank-qa.git
```

Папка появится здесь:

```
~/Desktop/testgrow-internet-bank-qa/
```

Если хочешь имя как у Sauce Demo (с пробелами/другим названием):

```bash
cd ~/Desktop
git clone https://github.com/andrew-hitch/testgrow-internet-bank-qa.git "TestGrow Internet Bank QA"
```

---

## Шаг 3 — Открой в Cursor (навигация по файлам)

1. Cursor → **File → Open Folder…**
2. Выбери `Desktop/testgrow-internet-bank-qa` (или `TestGrow Internet Bank QA`)
3. В левой панели **Explorer** увидишь структуру:

```
testgrow-internet-bank-qa/
├── test-plans/
├── test-cases/
├── bug-reports/
├── screenshots/
├── test-data/
├── requirements/
└── README.md
```

Это тот же формат, что Sauce Demo: папки + файлы, без сайта и `npm install`.

---

## Шаг 4 — Работа с тест-кейсами

Открой в Excel или Numbers:

```
test-cases/TestGrow_Internet_Bank_Test_Cases.csv
```

Колонки **Actual Result** и **Pass/Fail** заполняешь при прохождении симулятора TestGrow.

---

## Windows

```powershell
cd $env:USERPROFILE\Desktop
git clone https://github.com/andrew-hitch/testgrow-internet-bank-qa.git
```

Дальше: Cursor → Open Folder → эта папка на Desktop.

---

## Если `git clone` не работает

- Установи Git: https://git-scm.com/downloads
- Или используй **GitHub Desktop**: Clone repository → выбери папку Desktop

---

## Текущий облачный репозиторий (до создания GitHub)

Код уже в Cursor Origin:

`andrew-hitch/tmp-1b2f381a38a340bc`

После **Create repo** на GitHub содержимое будет в постоянном репозитории, и шаг 2 даст папку на Desktop.
