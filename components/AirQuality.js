import { useCoords } from "./GeolocationProvider"

export default function AirQuality() {
  const coords = useCoords();

  return (
    <div>
      <p>{coords?.latitude}</p>
      <p>{coords?.longitude}</p>
    </div>
  )
}