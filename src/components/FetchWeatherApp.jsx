import { React, useState } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";

export const FetchWeatherApp = () => {
  const {
    data,
    isLoading,
    error,
    difKelvin,
    handleSubmit,
    handleCityChange,
    errorMsg,
  } = useFetchWeather(); // Usar las funciones que devuelve el hook

  return (
    <div className="container">
      <h1>Aplicacion de Clima</h1>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : error ? (
        <h4>Ha ocurrido un error: {error}</h4>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese una ciudad"
            onChange={handleCityChange}
          />
          <button type="submit">Buscar</button>
        </form>
      )}
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {data && (
        <div>
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <p>
            La temperatura actual es {Math.floor(data.main.temp - difKelvin)}°C
          </p>
          <p>
            La condición meteorológica actual: {data.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};
