import { Inter } from "next/font/google";
import "../../styles/globals.css";
// search context provider
import { SearchContextProvider } from "../../context/search";

import { notFound } from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carland",
  description: "carland, and a car rental company",
};

const locales = ['en', 'pt'];

export default async function RootLayout({ children, params: {locale} }) {
  const messages = await getMessages(locale);

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <SearchContextProvider>
      <html lang={locale}>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </SearchContextProvider>
  );
}