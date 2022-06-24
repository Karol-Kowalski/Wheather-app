import { useEffect, useState } from "react";
import { useCoords } from "./GeolocationProvider"


export default function AirQuality() {
  const coords = useCoords();
  const [pollution, setPollution] = useState();
  
  async function getData() {
    const res = await fetch('http://localhost:3000/api/apiAirPollution');
    const data = await res.json()
    setPollution(data)  
  };

  useEffect(() => {
    getData()
  }, [coords])

  console.log(pollution);
  return (
    <div>
      <p>{coords?.latitude}</p>
      <p>{coords?.longitude}</p>
    </div>
  )
}