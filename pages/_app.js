import GeolocationProvider from "../components/GeolocationProvider"
import Page from "../components/Page"

function MyApp({ Component, pageProps }) {
  return (
    <GeolocationProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </GeolocationProvider>
  )
}

export default MyApp
