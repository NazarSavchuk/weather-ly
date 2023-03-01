import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CurrentIconChoose } from "../../../utils/CurrentIconChoose";
import "./ForecastDaysCardsCarousel.css";

interface DailyForecastDataProps {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export const ForecastDaysCardsCarousel: React.FC<DailyForecastDataProps> = (
  dailyForecastData
) => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    arrows: true,
    infinite: false,
  };
  let forecastArray = [];

  for (let i = 0; i < dailyForecastData.time.length; i++) {
    const date = new Date(dailyForecastData.time[i]);
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });
    forecastArray[i] = {
      day: dayOfWeek,
      maxTemp: dailyForecastData.temperature_2m_max[i],
      currentIcon: (
        <CurrentIconChoose
          weathercode={dailyForecastData.weathercode[i]}
          size={"sm"}
        />
      ),
    };
  }

  return (
    <Slider {...settings} className="slick-slider max-w-2xl">
      {forecastArray.map((item, index) => (
        <div
          className=" w-28 h-52  bg-gradient-to-br from-red-300 to-purple-400 backdrop-blur-md bg-opacity-50 p-4 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          key={index}>
          <div className=" text-2xl text-center text-white font-light mb-3">
            {item.maxTemp + "°C"}
          </div>
          <div className=" mb-2">{item.currentIcon}</div>
          <div className="text-2xl text-center text-white font-light">
            {item.day}
          </div>
        </div>
      ))}
    </Slider>
  );
};
