import { React, useState } from 'react'
import { useFetchWeather } from '../hooks/useFetchWeather'



export const FetchWeatherApp = () => {

    const { data, isLoading, error, handleCityChange, handleSubmit, difKelvin} = useFetchWeather(data)
  

  
    return (
      <div className='container'>
        <h1>Aplicacion de Clima</h1>
  
  
      </div>
    )
}

