import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainPage } from "./components/pages/MainPage";
import { SearchPage } from "./components/pages/SearchPage";
import { Loading } from "./components/ui/Loading";
import { ServerError } from "./components/ui/ServerError";

import { selectWeatherData } from "./redux/app/store";
import { fetchWeatherData } from "./redux/features/weatherData";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData);

  React.useEffect(() => {
    if (weatherData.status === "loading") {
      dispatch(fetchWeatherData() as any);
    }
    console.log(weatherData.status);
  }, [weatherData]);

  return (
    <>
      {weatherData.status === "loading" ? <Loading /> : ""}
      {weatherData.status === "failed" ? <ServerError /> : ""}
      {weatherData.status === "succeeded" ? (
        <div className="flex h-full justify-between">
          <MainPage />
          <SearchPage />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
