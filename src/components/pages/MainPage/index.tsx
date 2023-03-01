import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../../redux/app/store";
import { WeatherState } from "../../../redux/features/weatherData";
import { CurrentDataTime } from "../../ui/CurrentDataTime";
import { CurrentTemperature } from "../../ui/CurrentTemperature";
import { CurrentWeatherDetails } from "../../ui/CurrentWeatherDetails";
import { CurrentIconChoose } from "../../../utils/CurrentIconChoose";
import { ForecastDaysCardsCarousel } from "../../ui/ForecastDaysCardsCarousel";

export type CurrentWeatherType = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
};

export const MainPage = () => {
  const weatherData = useSelector(selectWeatherData);

  const currentWeather: CurrentWeatherType = weatherData.data.current_weather;
  const currentTemperature: number = currentWeather.temperature;
  const time = weatherData.data.current_weather.time;

  return (
    <div className="bg-gradient-to-br from-red-300 to-purple-500 h-full px-16 py-4 max-w-4xl flex-1">
      <div className="">
        <CurrentIconChoose
          time={time}
          weathercode={currentWeather.weathercode}
        />
      </div>{" "}
      <CurrentTemperature currentTemperature={currentTemperature} />
      <CurrentDataTime time={time} />
      <CurrentWeatherDetails weatherData={weatherData} />
      <ForecastDaysCardsCarousel {...weatherData.data.daily} />
    </div>
  );
};
