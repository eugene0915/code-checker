import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8YC51ZEV9Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8YC51ZEV9Y');
            `,
          }}
        />
        {/* End Google Analytics 4 */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
