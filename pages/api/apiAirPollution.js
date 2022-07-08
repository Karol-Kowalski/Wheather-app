// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const airPollution = {
  "coord":[
    50,
    50
  ],
  "list":[
    {
      "dt":1605182400,
      "main":{
        "aqi":1
      },
      "components":{
        "co":201.94053649902344,
        "no":0.01877197064459324,
        "no2":0.7711350917816162,
        "o3":68.66455078125,
        "so2":0.6407499313354492,
        "pm2_5":0.5,
        "pm10":0.540438711643219,
        "nh3":0.12369127571582794
      }
    }
  ]
}

const apiKey = process.env.PRIVATE_OPEN_WHEATHER_KEY;

export default async function apiAirPollution(req, res) {
  const { lat, lon } = req.query;

  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  
  const apiResponse = await fetch(url);
  const airPollution = await apiResponse.json();
  const data = await airPollution.list[0].components;
  res.status(200).json({ ...data });
}
