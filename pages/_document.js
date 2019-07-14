import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Properly SSR styled components
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Literata:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon.png" />
          <meta
            name="description"
            content="do you fw the vision? let's build."
          />
          <meta
            property="og:description"
            content="do you fw the vision? let's build."
          />
          <meta
            name="twitter:description"
            content="do you fw the vision? let's build."
          />
          <meta
            property="og:image"
            content="http://ifwthevision.build/static/og_image.png"
          />
          <meta
            name="twitter:image"
            content="http://ifwthevision.build/static/og_image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
