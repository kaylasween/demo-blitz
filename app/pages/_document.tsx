import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body>
          <Main />
          <BlitzScript />
          <p>Is this doing anything?</p>
        </body>
      </Html>
    )
  }
}

export default MyDocument
