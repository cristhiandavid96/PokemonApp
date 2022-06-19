import { CssBaseline } from '@nextui-org/react'
import Document, { Html, Main, Head, DocumentContext, DocumentInitialProps, NextScript } from 'next/document'


class MyDocument extends Document {


  static async getInitialProps(ctx) {


    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    }
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          {CssBaseline.flush()}
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