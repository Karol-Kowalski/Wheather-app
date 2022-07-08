const apiKey = process.env.PRIVATE_OPEN_WHEATHER_KEY;

export default async function apiAirPollution(req, res) {
  const { lat, lon } = req.query;

  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  
  const apiResponse = await fetch(url);
  const airPollution = await apiResponse.json();
  const data = await airPollution.list[0].components;
  res.status(200).json({ ...data });
}
