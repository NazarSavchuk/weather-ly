import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../../redux/app/store";
import { CurrentDataTime } from "../../ui/CurrentDataTime";
import { CurrentTemperature } from "../../ui/CurrentTemperature";
import { CurrentWeatherIcon } from "../../ui/CurrentWeatherIcon";

export const MainPage = () => {
  const weatherData = useSelector(selectWeatherData);
  const currentTemperature: number =
    weatherData.data.current_weather.temperature;
  const time = weatherData.data.current_weather.time;

  return (
    <div className="bg-gradient-to-br from-red-300 to-purple-500 h-full px-16 py-4">
      <div className="mb-">
        <CurrentWeatherIcon />
      </div>{" "}
      <CurrentTemperature currentTemperature={currentTemperature} />
      <CurrentDataTime time={time} />
    </div>
  );
};
