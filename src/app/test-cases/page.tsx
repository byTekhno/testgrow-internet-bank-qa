"use client";

import { useMemo, useState } from "react";
import { PageHeader, SectionCard } from "@/components/PageHeader";
import { testCases } from "@/data/test-cases";

export default function TestCasesPage() {
  const [query, setQuery] = useState("");
  const [module, setModule] = useState("all");

  const modules = useMemo(
    () => Array.from(new Set(testCases.map((tc) => tc.module))).sort(),
    [],
  );

  const filtered = testCases.filter((tc) => {
    const matchesModule = module === "all" || tc.module === module;
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      tc.id.toLowerCase().includes(q) ||
      tc.title.toLowerCase().includes(q) ||
      tc.requirement.toLowerCase().includes(q);
    return matchesModule && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Тест-кейсы"
        description="38 тест-кейсов с маппингом на требования ТЗ. Используйте фильтры при прохождении симулятора TestGrow."
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          placeholder="Поиск по ID, названию, REQ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 sm:max-w-md"
        />
        <select
          value={module}
          onChange={(e) => setModule(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none"
        >
          <option value="all">Все модули</option>
          {modules.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-slate-500">
        Показано {filtered.length} из {testCases.length} тест-кейсов
      </p>

      <div className="space-y-4">
        {filtered.map((tc) => (
          <SectionCard key={tc.id} title={`${tc.id} — ${tc.title}`}>
            <div className="mb-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-slate-100 px-2 py-1 font-medium">{tc.module}</span>
              <span className="rounded-full bg-teal-50 px-2 py-1 font-medium text-teal-800">{tc.requirement}</span>
              <span className="rounded-full bg-amber-50 px-2 py-1 font-medium text-amber-800">{tc.priority}</span>
            </div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-slate-500">Предусловия</dt>
                <dd className="mt-1 text-slate-700">{tc.preconditions}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Тестовые данные</dt>
                <dd className="mt-1 text-slate-700">{tc.testData}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-slate-500">Шаги</dt>
                <dd className="mt-1">
                  <ol className="list-decimal space-y-1 pl-5 text-slate-700">
                    {tc.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-slate-500">Ожидаемый результат</dt>
                <dd className="mt-1 rounded-lg bg-emerald-50 px-3 py-2 text-slate-800">{tc.expected}</dd>
              </div>
            </dl>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
