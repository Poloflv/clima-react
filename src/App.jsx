
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import OtherCity from './components/OtherCity';

function App() {


  const [theme, setTheme] = useState("light")

  const [weatherInfo, setWeatherInfo] = useState(null)

  const [otherCity, setOtherCity] = useState(null)

  const getCitys = (e) => {
    e?.preventDefault()
    const cityName = e.target.animeName.value;
    const API_KEY = "b5bd5fbb42a849116bba53bbaf45d9ef"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=es`

    axios.get(url)
    .then(({data}) => setOtherCity(data))
    .catch((err) => console.log(err))
  }


  const succes = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    // console.log({lat, lon});

    const API_KEY = "b5bd5fbb42a849116bba53bbaf45d9ef"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`

    // console.log(url);
    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err))
  }


  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark"); 
  };
  


  return (
    
    <section className='dark:bg-black/80'>
          <main className='bg-[url("/images/terraces-1.jpg")] dark:opacity-80 min-h-screen text-white font-lato flex justify-center items-center flex-col p-4 '>

      <div className="switch-button ">
        <input type="checkbox" name="switch-button" id="switch-label"  className="accent-black-500/25 switch-button__checkbox cursor-pointer" onClick={handleThemeSwitch} />  
        <label htmlFor="switch-label" className="accent-black-500/25 switch-button__label cursor-pointer"></label>
      </div>

      <h1 className=' font-bold text-center mb-4 text-black text-4xl dark:text-white'>Buscar Ciudad</h1>
        <form onSubmit={getCitys}   className='flex rounded-md overflow-hidden max-w-max mx-auto'>
          <input id='animeName' type="text" autoComplete='off' placeholder='Buscar Ciudad...' className='text-black p-2'/>
          <button className='bg-blue-400 px-4 dark:bg-indigo-600'>Buscar</button>
        </form>
    

    <Weather weatherInfo={weatherInfo}/>
    <OtherCity otherCity={otherCity} />


    <p className='mt-10'>Fotos: pixabay.com</p>
  </main>
    </section>

    
  )
}

export default App
