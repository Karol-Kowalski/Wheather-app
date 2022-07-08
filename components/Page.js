import AirQuality from "./AirQuality";
import Header from "./Header";
import Weather from "./Weather"

export default function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}