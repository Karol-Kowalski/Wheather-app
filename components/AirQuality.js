import { useEffect, useState } from "react";
import { useCoords } from "./GeolocationProvider"
import AirChart from "./AirChart";

export default function AirQuality() {
  const coords = useCoords();
  const [pollution, setPollution] = useState();
  
  async function getData() {
    const lat = coords.latitude;
    const lon = coords.longitude;   
    const res = await fetch(`http://localhost:3000/api/apiAirPollution?lat=${lat}&lon=${lon}`);
    const data = await res.json();
    setPollution(data);
  };

  useEffect(() => {
    if (coords) getData();
  }, [coords]);

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