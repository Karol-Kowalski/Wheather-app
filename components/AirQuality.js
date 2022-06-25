import { useEffect, useState } from "react";
import { useCoords } from "./GeolocationProvider"
import AirChart from "./AirChart";

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

  console.log(pollution)
  return (
    <div>
      {pollution ?
        Object.keys(pollution)
          .map(key => <AirChart key={key} name={key} value={pollution[key]} />) :
        null}
    </div>
  )
}