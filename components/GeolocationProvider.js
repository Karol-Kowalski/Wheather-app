import React, { useState, useEffect, useContext } from "react"

const Geolocation = React.createContext()

export function useCoords() {
  return useContext(Geolocation)
}

export default function GeolocationProvider({ children }) {
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
    <Geolocation.Provider value={coords}>
      {children}
    </Geolocation.Provider>
  )
}