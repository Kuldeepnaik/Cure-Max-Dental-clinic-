import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Cure Max Hospital | Best Hospital in Hongasandra, Bangalore',
  description: 'Expert Doctors & Advanced Treatment. Trusted by 500+ Patients. Book Your Appointment Today at Cure Max Hospital, Begur Rd, Hongasandra.',
  keywords: ['Hospital in Hongasandra', 'Clinic near Begur Road', 'Best hospital in Bangalore', 'Cure Max Hospital', 'Healthcare', 'Doctors'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
