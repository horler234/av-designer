import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Custom Next.js Document:
 *
 * Extends the default 'Document' to augment the applications <html> and <body> tags,
 * and to change the 'renderPage' method to ensure that Styled-Components work properly
 * with SSR.
 */

//@ts-ignore
export default class MyDocument extends Document<any> {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          enhanceComponent: (Component) => (props) =>
            sheet.collectStyles(<Component {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/images/avatar.png"
            type="image/png"
          />

          <meta property="og:url" content="https://avdesigner.com" />
          <meta
            name="description"
            content="AVDesigner is a dashboard that shows some data."
          />

          <meta
            name="og:description"
            content="AVDesigner is a dashboard that shows some data."
          />
          {/* <meta name="og:image" content="/images/sign-up-image.png" /> */}
          <meta property="og:site_name" content="AVDesigner" />
          <meta name="theme-color" content="#FF6600" />
          {/* twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AVDesigner" />
          <meta name="twitter:description" content="#FF6600" />
          {/* <meta name="twitter:image" content="/images/sign-up-image.png" /> */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
