import Link from "next/link";

const links = [
  { href: "/", label: "Обзор" },
  { href: "/requirements", label: "Требования" },
  { href: "/test-cases", label: "Тест-кейсы" },
  { href: "/bugs", label: "Баги" },
  { href: "/test-data", label: "Тестовые данные" },
];

export function Nav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              QA Portfolio
            </p>
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {`{TEST}GROW BANK`}
            </h1>
            <p className="text-sm text-slate-600">
              Ручное тестирование модуля перевода между счетами
            </p>
          </div>
          <a
            href="https://testgrow.ru"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-teal-700 hover:text-teal-900"
          >
            testgrow.ru ↗
          </a>
        </div>
        <nav className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
