import { configureStore } from "@reduxjs/toolkit";
import weatherSlice, { fetchWeatherData } from "../features/weatherData";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

store.dispatch(fetchWeatherData());

export default store;

export const selectWeatherData = (state: any) => state.weather;
