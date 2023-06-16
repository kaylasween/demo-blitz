import { Head, ErrorComponent } from "blitz"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page404() {
  const statusCode = 404
  const title = "This page could not be found"
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title} ERROR!
        </title>
      </Head>
      <ErrorComponent statusCode={statusCode} title={title} />
    </>
  )
}
