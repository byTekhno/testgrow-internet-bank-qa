"use client";

import { useMemo, useState } from "react";
import { PageHeader, SectionCard } from "@/components/PageHeader";
import clients from "@/data/clients.json";

type Client = {
  id: number;
  name: string;
  comment: string;
  ownerName: string;
  beneficiary: string;
  accounts: Array<{
    type: string;
    number: string;
    balance: number;
    currency: string;
  }>;
};

export default function TestDataPage() {
  const data = clients as Client[];
  const [selectedId, setSelectedId] = useState(data[0]?.id ?? 1);

  const client = useMemo(
    () => data.find((c) => c.id === selectedId) ?? data[0],
    [data, selectedId],
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Тестовые данные"
        description="15 тестовых клиентов из Google Sheets TestGrow. Используйте для позитивных, негативных и граничных проверок переводов."
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="text-sm font-medium text-slate-700" htmlFor="client-select">
          Клиент
        </label>
        <select
          id="client-select"
          value={selectedId}
          onChange={(e) => setSelectedId(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm sm:max-w-xl"
        >
          {data.map((c) => (
            <option key={c.id} value={c.id}>
              ID {c.id} — {c.ownerName || c.comment}
            </option>
          ))}
        </select>
        <a
          href="https://docs.google.com/spreadsheets/d/1IUVQV2zzd8spITAgIt0Hfpn0QZOpvq8Ii1rJiAS-sAA/edit?gid=1977293877"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-teal-700 hover:underline"
        >
          Открыть таблицу ↗
        </a>
      </div>

      {client ? (
        <>
          <SectionCard title="Информация о клиенте">
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-slate-500">Комментарий</dt>
                <dd className="font-medium">{client.comment}</dd>
              </div>
              <div>
                <dt className="text-slate-500">ФИО (руб. реквизиты)</dt>
                <dd className="font-medium">{client.ownerName || "—"}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Beneficiary</dt>
                <dd className="font-medium">{client.beneficiary || "—"}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Счетов</dt>
                <dd className="font-medium">{client.accounts.length}</dd>
              </div>
            </dl>
          </SectionCard>

          <SectionCard title="Счета клиента">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="py-2 pr-4">Тип</th>
                    <th className="py-2 pr-4">Номер</th>
                    <th className="py-2 pr-4">Остаток</th>
                    <th className="py-2">Валюта</th>
                  </tr>
                </thead>
                <tbody>
                  {client.accounts.map((acc) => (
                    <tr key={acc.number} className="border-b border-slate-100">
                      <td className="py-2 pr-4">{acc.type}</td>
                      <td className="py-2 pr-4 font-mono text-xs">{acc.number}</td>
                      <td className="py-2 pr-4">
                        {acc.balance.toLocaleString("ru-RU", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="py-2">{acc.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </>
      ) : null}
    </div>
  );
}
