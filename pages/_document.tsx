import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const GA_TRACKING_ID = process.env.GTAG;
    return (
      <Html>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument