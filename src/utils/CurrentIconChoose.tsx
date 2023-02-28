import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../redux/app/store";
import weatherIcons from "../assets/weatherIconsExport";

export const CurrentIconChoose = () => {
  const { weathercode, time } =
    useSelector(selectWeatherData).data.current_weather;
  const hour = parseInt(time.substring(11, 13));

  const iconClass = "h-28 w-28";

  switch (weathercode) {
    case 0:
      return <weatherIcons.clearDay className={iconClass} />;
    case 1:
    case 2:
    case 3:
      return hour >= 6 && hour <= 18 ? (
        <weatherIcons.partlyCloudyDay className={iconClass} />
      ) : (
        <weatherIcons.partlyCloudyNight className={iconClass} />
      );
    case 45:
    case 48:
      return <weatherIcons.fog className={iconClass} />;
    case 51:
    case 53:
    case 55:
      return <weatherIcons.showers className={iconClass} />;
    case 56:
    case 57:
      return <weatherIcons.sleet className={iconClass} />;
    case 61:
    case 63:
    case 65:
      return <weatherIcons.showers className={iconClass} />;
    case 66:
    case 67:
      return <weatherIcons.heavySleet className={iconClass} />;
    case 71:
    case 73:
    case 75:
    case 77:
      return <weatherIcons.snow className={iconClass} />;
    case 80:
    case 81:
    case 82:
      return <weatherIcons.heavyShowers className={iconClass} />;
    case 85:
    case 86:
      return <weatherIcons.thunderstormShowers className={iconClass} />;
    case 95:
      return <weatherIcons.thunderstormShowers className={iconClass} />;
    case 96:
    case 99:
      return <weatherIcons.thunderstormSnow className={iconClass} />;
    default:
      return <weatherIcons.clearDay className={iconClass} />;
  }
};
