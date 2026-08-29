import { PageHeader, SectionCard } from "@/components/PageHeader";
import { requirements, transferLimits } from "@/data/requirements";

export default function RequirementsPage() {
  const grouped = requirements.reduce<Record<string, typeof requirements>>(
    (acc, req) => {
      acc[req.category] = acc[req.category] ?? [];
      acc[req.category].push(req);
      return acc;
    },
    {},
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Функциональные требования"
        description="Выжимка из технического задания ibrequirements.docx: сценарии ИБ-1–ИБ-3 и требования REQ01–REQ26 для модуля «Интернет Банк»."
      />

      <SectionCard title="Лимиты перевода по умолчанию (REQ09)">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4">Валюта</th>
                <th className="py-2">Максимальная сумма перевода</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(transferLimits).map(([currency, limit]) => (
                <tr key={currency} className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">{currency}</td>
                  <td className="py-2">{limit.toLocaleString("ru-RU")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {Object.entries(grouped).map(([category, items]) => (
        <SectionCard key={category} title={category}>
          <div className="space-y-4">
            {items.map((req) => (
              <div key={req.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-900">
                    {req.id}
                  </span>
                  <span className="font-medium text-slate-900">{req.title}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{req.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      ))}

      <SectionCard title="Ключевые ограничения перевода">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Перевод только между счетами клиента в одной валюте (ИБ-3).</li>
          <li>• Счет списания: Текущий, Зарплатный, Накопительный (REQ03).</li>
          <li>• Счет зачисления: + Счет кредитной карты, Депозитный (REQ05).</li>
          <li>• Счет списания не должен быть в списке зачисления (REQ04-1).</li>
          <li>• Маска суммы: NNNNNNN.NN (REQ25).</li>
        </ul>
      </SectionCard>
    </div>
  );
}
