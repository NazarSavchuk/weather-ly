import React from "react";
import { CurrentWeatherType } from "../../pages/MainPage";
import weatherDetailsIcons from "../../../assets/weatherDetailsIconsExport";
import { WeatherState } from "../../../redux/features/weatherData";
import { findHum, findRain } from "../../../utils/findHumAndRain";
interface CurrentWeatherDetailsProps {
  weatherData: WeatherState;
}

export const CurrentWeatherDetails: React.FC<CurrentWeatherDetailsProps> = ({
  weatherData,
}) => {
  return (
    <div className=" flex font-light text-white mb-16">
      <>
        <span className=" flex mr-3 items-center justify-center">
          <weatherDetailsIcons.WindDirection className="mr-3" />
          <> Wind {weatherData.data?.current_weather.windspeed} km/h</>
        </span>{" "}
        <span className=" flex  mr-3 items-center justify-center">
          {" "}
          |
          <weatherDetailsIcons.Hum className=" mx-3" />
          <>Hum {findHum(weatherData)} %</>
        </span>
        |
        <span className=" flex items-center justify-center">
          <weatherDetailsIcons.Rain className=" mx-3" />
          <>Rain {findRain(weatherData)} %</>
        </span>
      </>
    </div>
  );
};
