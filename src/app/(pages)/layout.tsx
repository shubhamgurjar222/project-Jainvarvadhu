'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AlertProvider } from "@/context/AlertContext";
import Script from 'next/script';

import './../../../public/css/bootstrap.css';
import './../../../public/css/font-awesome.min.css';
import './../../../public/css/animate.min.css';
import './../../../public/css/style.css';
import './../../../public/css/alert.css';

interface RootLayoutProps {  children: ReactNode; }

export default function RootLayout({ children }: RootLayoutProps) {
  const pathName = usePathname();
  const hideLayout = pathName.startsWith('/signup/');

  return (
    <html>
      <body>

        {!hideLayout && <Header />}
        
        <AlertProvider>
          {children}
        </AlertProvider>

        {!hideLayout && <Footer />}

        {/* <Script src="/js/jquery.min.js" strategy="afterInteractive" /> */}
        <Script src='/js/slick.js' strategy='afterInteractive' />
        <Script src="/js/custom.js" strategy="afterInteractive" />
        {/* <Script id="jquery-global" strategy="beforeInteractive">{`window.$ = window.jQuery = window.jQuery || window.$;`}</Script> */}
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/mail.js" strategy="beforeInteractive" />
        <Script src="/js/gallery.js" strategy="beforeInteractive" />
        <Script src="/js/select-opt.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}

