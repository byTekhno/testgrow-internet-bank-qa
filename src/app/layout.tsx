import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "TestGrow Practice 99 — Internet Bank QA",
  description:
    "Портфолио ручного тестирования модуля «Интернет Банк» (TestGrow, practice99): тест-план, тест-кейсы, чек-лист багов и тестовые данные.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-8">
            Практическое задание TestGrow · Раздел 2 «Написание тестов» · practice99
          </div>
        </footer>
      </body>
    </html>
  );
}
