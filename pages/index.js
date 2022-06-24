import AirQuality from "../components/AirQuality";
import GeolocationProvider from "../components/GeolocationProvider";
import Weather from "../components/Weather";

export default function Page() {

  return (
    <GeolocationProvider>
      <AirQuality />
      <Weather />
    </GeolocationProvider>
  )
}
