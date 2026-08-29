export type BugSeverity = "Blocker" | "Critical" | "Major" | "Minor" | "Trivial";
export type BugStatus = "Open" | "In Progress" | "Resolved" | "Closed";

export type BugReport = {
  id: string;
  title: string;
  severity: BugSeverity;
  status: BugStatus;
  module: string;
  requirement: string;
  environment: string;
  preconditions: string;
  steps: string[];
  expected: string;
  actual: string;
  testData: string;
  notes?: string;
};

/**
 * Шаблоны областей для регистрации дефектов в BugTracker TestGrow.
 * После прохождения симулятора замените actual и добавьте ID из трекера.
 */
export const bugChecklist: Array<{
  area: string;
  requirement: string;
  whatToCheck: string;
}> = [
  {
    area: "Список счетов",
    requirement: "REQ01",
    whatToCheck: "Отображаются ли счета неразрешенных типов или скрыты допустимые",
  },
  {
    area: "Список счетов",
    requirement: "REQ02",
    whatToCheck: "Корректность валют, включая швейцарский франк",
  },
  {
    area: "Реквизиты",
    requirement: "REQ17",
    whatToCheck: "ФИО владельца для рублевых счетов совпадает с тестовыми данными",
  },
  {
    area: "Реквизиты",
    requirement: "REQ18",
    whatToCheck: "Поля Beneficiary / SWIFT для валютных счетов",
  },
  {
    area: "Перевод",
    requirement: "REQ03",
    whatToCheck: "Депозитный и кредитный счет в списке «Со счета»",
  },
  {
    area: "Перевод",
    requirement: "REQ04-1",
    whatToCheck: "Счет списания присутствует в списке «На счет»",
  },
  {
    area: "Перевод",
    requirement: "REQ06",
    whatToCheck: "Перевод между счетами в разных валютах",
  },
  {
    area: "Перевод",
    requirement: "REQ07-1",
    whatToCheck: "Перевод при недостаточном остатке",
  },
  {
    area: "Перевод",
    requirement: "REQ07-2",
    whatToCheck: "Лимиты 999999.99 / 1500 / 2000 / 12000 по валютам",
  },
  {
    area: "Перевод UI",
    requirement: "REQ20",
    whatToCheck: "Исходное состояние формы и активность кнопки",
  },
  {
    area: "Перевод UI",
    requirement: "REQ24",
    whatToCheck: "Символ валюты рядом с полем суммы",
  },
  {
    area: "Перевод UI",
    requirement: "REQ25",
    whatToCheck: "Маска суммы NNNNNNN.NN",
  },
  {
    area: "Перевод UI",
    requirement: "REQ26",
    whatToCheck: "Кнопка «Перевести» при неполных данных",
  },
  {
    area: "Сообщения",
    requirement: "ИБ-3",
    whatToCheck: "Тексты «Данная операция невозможна» и успешного перевода",
  },
];

export const bugReportTemplate: BugReport = {
  id: "BUG-XXX",
  title: "[Модуль] Краткое описание проблемы",
  severity: "Major",
  status: "Open",
  module: "Перевод между счетами",
  requirement: "REQ07-1",
  environment: "TestGrow practice99, браузер Chrome",
  preconditions: "Клиент авторизован, выбраны счета списания и зачисления",
  steps: [
    "Открыть «Перевод между счетами»",
    "Выбрать счет списания с остатком X",
    "Ввести сумму Y > X",
    "Нажать «Перевести»",
  ],
  expected: "Сообщение «Недостаточно средств на счете», операция не создается",
  actual: "Опишите фактический результат после тестирования в симуляторе",
  testData: "Клиент, номера счетов, сумма",
};
