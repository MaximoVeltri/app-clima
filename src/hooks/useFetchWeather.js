import { useEffect, useState } from "react";

export const useFetchWeather = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const url = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "537f8b695be0ad56a0fcf5ab96ca6892";
  const difKelvin = 273.15;

  const fetchWeatherData = async () => {
    if (!city.trim()) return;

    setState({
      data: null,
      isLoading: true,
      error: null,
    });

    try {
      const response = await fetch(`${url}?q=${city}&appid=${API_KEY}&lang=es`);
      const data = await response.json();

      if (response.ok) {
        setState({
          data,
          isLoading: false,
          error: null,
        });
      } else {
        setState({
          data: null,
          isLoading: false,
          error: data.message,
        });
      }
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: "Error al obtener los datos",
      });
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setErrorMsg(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setErrorMsg("Por favor ingrese el nombre de una ciudad.");
      return;
    }

    fetchWeatherData();
  };

  const { data, isLoading, error } = state;

  return {
    data,
    isLoading,
    error,
    difKelvin,
    handleSubmit,
    handleCityChange,
    errorMsg,
  };
};
