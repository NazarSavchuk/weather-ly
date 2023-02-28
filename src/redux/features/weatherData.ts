import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface OpenMeteoData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    precipitation_probability: string;
    precipitation: string;
    cloudcover: string;
  };
  hourly: {
    time: string[];
    data: {
      temperature_2m: number[];
      precipitation_probability: number[];
      precipitation: number[];
      cloudcover: number[];
    };
  };
}

interface WeatherState {
  data: OpenMeteoData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

// Define a function to fetch weather data from an API
export const fetchWeatherData = createAsyncThunk<OpenMeteoData>(
  "weather/fetchWeatherData",
  async () => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&hourly=temperature_2m,precipitation_probability,precipitation,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  }
);

// Define the initial state of the weather slice
const initialState: WeatherState = {
  data: null,
  status: "idle",
  error: null,
};

// Define the weather slice with reducers and actions
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the weather slice reducer
export default weatherSlice.reducer;
