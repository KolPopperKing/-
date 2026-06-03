import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ילד פלוס - פלטפורמה אינטראקטיבית לילדים',
  description:
    'ילד פלוס היא פלטפורמה אינטראקטיבית בטוחה לילדים המשלבת יצירה, למידה, משחקים וקהילה. צור, למד ופתח עם דמיון!',
  keywords: ['ילדים', 'חינוך', 'למידה', 'משחקים', 'יצירה', 'בטיחות'],
  authors: [{ name: 'Yeled Plus Team' }],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://yeledplus.com',
    siteName: 'ילד פלוס',
    title: 'ילד פלוס - פלטפורמה אינטראקטיבית לילדים',
    description: 'יצור, למד ותפתח עם דמיון בפלטפורמה בטוחה!',
    images: [
      {
        url: 'https://yeledplus.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ילד פלוס',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ילד פלוס',
    description: 'פלטפורמה אינטראקטיבית לילדים',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ילד פלוס" />
      </head>
      <body className="antialiased bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}