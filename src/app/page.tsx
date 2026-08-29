import Image from "next/image";
import Link from "next/link";
import { PageHeader, SectionCard, StatCard } from "@/components/PageHeader";
import { testCases } from "@/data/test-cases";
import { requirements } from "@/data/requirements";
import { bugChecklist } from "@/data/bugs";
import clients from "@/data/clients.json";

export default function HomePage() {
  const accountCount = clients.reduce(
    (sum, client) => sum + client.accounts.length,
    0,
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Тестирование интернет-банка TestGrow"
        description="Портфолио по заданию practice99: анализ ТЗ, проектирование тест-кейсов на модуль перевода между счетами, работа с тестовыми данными и регистрация дефектов в BugTracker платформы."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Тест-кейсы" value={String(testCases.length)} hint="Покрытие REQ и сценариев ИБ" />
        <StatCard label="Требования" value={String(requirements.length)} hint="Функциональные REQ и сценарии" />
        <StatCard label="Тестовые клиенты" value={String(clients.length)} hint="Из Google Sheets" />
        <StatCard label="Счета в данных" value={String(accountCount)} hint="Для позитивных и негативных проверок" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Цель задания">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>• Протестировать модуль «Интернет Банк» в симуляторе {`{TEST}GROW BANK`}.</li>
            <li>• Проверить список счетов, детали счета и перевод между счетами клиента.</li>
            <li>• Завести найденные ошибки в встроенный BugTracker TestGrow.</li>
            <li>• Применить техники из раздела «Написание тестов».</li>
          </ul>
        </SectionCard>

        <SectionCard title="Подход к тестированию">
          <ol className="space-y-2 text-sm leading-relaxed">
            <li>1. Анализ ТЗ (ibrequirements.docx) и тестовых данных.</li>
            <li>2. Составление тест-плана и чек-листа по требованиям REQ01–REQ26.</li>
            <li>3. Позитивные, негативные и граничные сценарии перевода.</li>
            <li>4. Проверка UI, бизнес-логики и текстов сообщений.</li>
            <li>5. Документирование дефектов с шагами воспроизведения.</li>
          </ol>
        </SectionCard>
      </div>

      <SectionCard title="Скриншоты симулятора">
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-slate-200">
            <Image
              src="/screenshots/login-screen.png"
              alt="Экран авторизации {TEST}GROW BANK"
              width={900}
              height={500}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-slate-100 px-4 py-2 text-xs text-slate-500">
              Экран входа — выбор пользователя
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-slate-200">
            <Image
              src="/screenshots/user-selection.png"
              alt="Выбор тестового пользователя"
              width={900}
              height={500}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-slate-100 px-4 py-2 text-xs text-slate-500">
              Список тестовых клиентов
            </figcaption>
          </figure>
        </div>
      </SectionCard>

      <SectionCard title="Быстрые ссылки">
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/test-cases" className="rounded-lg bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800">
            Открыть тест-кейсы
          </Link>
          <Link href="/bugs" className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50">
            Чек-лист для BugTracker
          </Link>
          <a
            href="https://docs.google.com/spreadsheets/d/1IUVQV2zzd8spITAgIt0Hfpn0QZOpvq8Ii1rJiAS-sAA/edit?gid=1977293877"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50"
          >
            Тестовые данные (Google Sheets) ↗
          </a>
        </div>
      </SectionCard>

      <SectionCard title="Области проверки (чек-лист)">
        <ul className="grid gap-2 sm:grid-cols-2 text-sm">
          {bugChecklist.slice(0, 8).map((item) => (
            <li key={item.requirement} className="rounded-lg bg-slate-50 px-3 py-2">
              <span className="font-medium text-teal-800">{item.requirement}</span>
              <span className="text-slate-600"> — {item.whatToCheck}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Полный чек-лист — на странице{" "}
          <Link href="/bugs" className="font-medium text-teal-700 underline">
            Баги
          </Link>
          .
        </p>
      </SectionCard>
    </div>
  );
}
