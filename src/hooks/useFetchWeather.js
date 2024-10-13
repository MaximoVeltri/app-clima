import { useEffect, useState } from "react"


export const useFetchWeather = () => {

    const [state, setState] = useState({
        data: null,
        isLoading:true,
        error:null
    })

    const [city, setCity] = useState('')

  
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = 'ae2e81395c4857ed1b907352b8cc60b2';
    const difKelvin = 273.15 
  
    
    const fetchWeatherData = async () => {
        if(!url) return 
        try {
            const response = await fetch(`${url}?q=${city}&appid=${API_KEY}&lang=es`)
            const data = await response.json();
            setState({
                data,
                isLoading:false,
                error:null
            })
            
        }catch(error){
            setState({
                data: null,
                error: error,
                isLoading:false,
            })
        }
        
        
    }
    
    const handleCityChange = (event) => {
        setCity(event.target.value)
        
    };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (city.trim() === '') {
            setError('Por favor ingrese el nombre de una ciudad.');
            setWeatherData(null);
            return;
        }
        
        fetchWeatherData();
    }
    
    const { data, isLoading, error} = state
    
    useEffect(() => {
        fetchWeatherData()
    }, [])
    

  return {
    data,
    isLoading,
    error,
    difKelvin,
    handleSubmit,
    handleCityChange
  }
}

