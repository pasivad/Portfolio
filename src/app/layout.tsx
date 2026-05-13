import type { Metadata } from 'next';
import { JetBrains_Mono, Rajdhani } from 'next/font/google';
import './globals.css';
import Header from '@/Layout/Header';
import Footer from '@/Layout/Footer';

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pasivad.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Vlad Pasichnyk — Full-Stack Engineer',
  description:
    'Portfolio of Vlad Pasichnyk — self-taught full-stack engineer with 2.5+ years shipping production TypeScript and React systems. Building Chrome extensions, AI dashboards, and multi-brand CMS platforms. Currently expanding into game development with C++ and Unreal Engine 5.',
  keywords: [
    'Vlad Pasichnyk',
    'full-stack engineer',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'game development',
    'Unreal Engine 5',
    'C++',
    'portfolio',
    'software engineer',
    'web developer',
  ],
  authors: [{ name: 'Vlad Pasichnyk' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vlad Pasichnyk — Full-Stack Engineer',
    description:
      'Self-taught full-stack engineer building production web systems and expanding into game development with C++ and Unreal Engine 5.',
    type: 'website',
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Vlad Pasichnyk — Full-Stack Engineer',
    description:
      'Self-taught full-stack engineer building production web systems and expanding into game development with C++ and Unreal Engine 5.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vlad Pasichnyk',
  url: SITE_URL,
  jobTitle: 'Full-Stack Engineer',
  description:
    'Self-taught full-stack engineer with 2.5+ years shipping production TypeScript and React systems.',
  knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js', 'C++', 'Unreal Engine 5'],
  sameAs: [
    'https://github.com/pasivad',
    'https://linkedin.com/in/vlad-pasichnyk',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetBrainsMono.className} min-h-full flex flex-col bg-bg-secondary text-text-primary`}>
        <Header />
        <div className="w-full max-w-350 mx-auto px-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
