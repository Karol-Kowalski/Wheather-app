import { useEffect, useState } from "react"

export default function Page() {
  const [coords, setCoords] = useState()
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  },[])

  return (
    <div>
      <p>{coords?.latitude}</p>
      <p>{coords?.longitude}</p>
    </div>
  )
}
