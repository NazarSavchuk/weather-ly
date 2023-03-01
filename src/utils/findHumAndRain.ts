import { WeatherState } from "../redux/features/weatherData";

export const findHum = (weatherData: WeatherState) => {
  return weatherData.data?.hourly.relativehumidity_2m[
    weatherData.data?.hourly.time.indexOf(weatherData.data.current_weather.time)
  ];
};

export const findRain = (weatherData: WeatherState) => {
  return weatherData.data?.hourly.precipitation_probability[
    weatherData.data?.hourly.time.indexOf(weatherData.data.current_weather.time)
  ];
};
