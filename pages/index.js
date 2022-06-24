import { useEffect, useState } from "react"

export default function Page() {
  const [coords, setCoords] = useState()
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
    })
  },[])

  return (
    <div>
      Hello
    </div>
  )
}
