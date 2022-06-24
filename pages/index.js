import AirQuality from "../components/AirQuality";
import GeolocationProvider from "../components/GeolocationProvider";

export default function Page() {

  return (
    <GeolocationProvider>
      <AirQuality />
    </GeolocationProvider>
  )
}
