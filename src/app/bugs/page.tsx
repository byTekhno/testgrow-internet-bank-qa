import { PageHeader, SectionCard } from "@/components/PageHeader";
import { bugChecklist, bugReportTemplate } from "@/data/bugs";

export default function BugsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="BugTracker и чек-лист дефектов"
        description="Структура баг-репорта для TestGrow и чек-лист областей, которые нужно проверить в симуляторе перед отправкой на проверку."
      />

      <SectionCard title="Как работать с BugTracker в TestGrow">
        <ol className="space-y-2 text-sm text-slate-700">
          <li>1. В симуляторе нажмите «Создать ошибку» или «Открыть BugTracker».</li>
          <li>2. Для каждого дефекта укажите шаги, ожидаемый и фактический результат.</li>
          <li>3. Свяжите баг с модулем (Счета / Перевод / Реквизиты).</li>
          <li>4. После регистрации всех багов — «Отправить на проверку».</li>
        </ol>
      </SectionCard>

      <SectionCard title="Шаблон баг-репорта">
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-medium text-slate-500">ID</dt>
            <dd>{bugReportTemplate.id}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Severity</dt>
            <dd>{bugReportTemplate.severity}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-slate-500">Title</dt>
            <dd className="font-medium">{bugReportTemplate.title}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Module</dt>
            <dd>{bugReportTemplate.module}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Requirement</dt>
            <dd>{bugReportTemplate.requirement}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-slate-500">Steps to reproduce</dt>
            <dd>
              <ol className="mt-1 list-decimal space-y-1 pl-5">
                {bugReportTemplate.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Expected</dt>
            <dd className="mt-1 rounded-lg bg-emerald-50 px-3 py-2">{bugReportTemplate.expected}</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-500">Actual</dt>
            <dd className="mt-1 rounded-lg bg-rose-50 px-3 py-2">{bugReportTemplate.actual}</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-slate-500">
          Markdown-шаблон: <code className="rounded bg-slate-100 px-1">docs/bug-report-template.md</code>
        </p>
      </SectionCard>

      <SectionCard title="Чек-лист областей для поиска багов">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4">Область</th>
                <th className="py-2 pr-4">REQ</th>
                <th className="py-2">Что проверить</th>
              </tr>
            </thead>
            <tbody>
              {bugChecklist.map((item) => (
                <tr key={item.requirement + item.area} className="border-b border-slate-100 align-top">
                  <td className="py-3 pr-4 font-medium">{item.area}</td>
                  <td className="py-3 pr-4 text-teal-800">{item.requirement}</td>
                  <td className="py-3 text-slate-700">{item.whatToCheck}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
