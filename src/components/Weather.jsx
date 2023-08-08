import axios from 'axios'
import React, { useState } from 'react'


const Weather = ({weatherInfo}) => {
    // console.log(weatherInfo);
  const [isCelsius, setIsCelsius] = useState(true)
  
    
  const celsiusToFahrenheit = (tempCelsius) => {
    return (((tempCelsius * 9/5)+32)).toFixed(1)
  }

  const handleChangeUnitTheme = () => {
    setIsCelsius(!isCelsius)
  }




    
  return (
    <section className='text-center text-black mt-4'>
      
      <h2 className='mb-6 text-3xl font-bold dark:text-white'>{weatherInfo?.name}</h2>

      <section className='grid gap-4 md:grid-cols-3 md:h-[250px]'>
        {/* sección superior */}
        <section className='bg-white/60 py-2 px-6 rounded-2xl min-w-[250px] md:col-span-2 mode-black  dark:bg-[#84848480] dark:text-[#FFFFFF]'>
          <h4 className='text-xl mt-2'>{weatherInfo?.weather[0].description}</h4>
          <div className='flex justify-center justify-items-center h-max font-light md:mt-8'>
            <span className='max-w-[203] bg-auto text-6xl leading-[1.5] md:text-8xl'>{isCelsius ? weatherInfo?.main.temp : celsiusToFahrenheit(weatherInfo?.main.temp)}{isCelsius ? "°C" :"°F"}</span>
            <div className='mt-1 h-20 w-20 md:h-28 md:w-28 '>
                <img className=' h-full block w-full' src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt='' />
            </div>
          </div>
        </section>

        {/* sección inferior */}
        <section className=' bg-white/60 rounded-2xl grid grid-cols-3 p-8 md:grid-cols-1 col-span-1 dark:bg-[#84848480] dark:text-[#FFFFFF] '>
          <article className='flex font-bold space-x-2'>
            <div className=' h-8 w-8'>
              <img className=' h-full block object-cover w-full ' src="\images\mdi_weather-windy.svg" alt='' />
            </div>
            <span className='py-1 '>{weatherInfo?.wind.speed}m/s</span>
            <div className='block h-full w-[1px] bg-[#0000003B] dark:bg-[#FFFFFF3B] md:hidden'/>
          </article>
            <div className='hidden md:block h-[1px] w-full bg-[#0000003B] dark:bg-[#FFFFFF3B]'/>

          <article className='flex font-bold space-x-2 justify-center md:justify-normal'>
            <div className=' h-8 w-8'>
              <img className=' h-full block object-cover w-full' src='\images\tabler_arrow-wave-right-down.svg' alt='' />
            </div>
            <span className='py-1 '>{weatherInfo?.main.humidity}%</span>
          <div className='object-right h-full w-[1px] bg-[#0000003B] dark:bg-[#FFFFFF3B] md:hidden'/>
          </article>
          <div className='hidden md:block h-[1px] w-full bg-[#0000003B] dark:bg-[#FFFFFF3B]'/>


          <article className='flex font-bold'>
            <div className=' h-8 w-8'>
              <img className=' h-full block object-cover w-full' src='\images\uil_raindrops-alt.svg' alt='' />
            </div>
            <span className='py-1'>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>
    <button onClick={handleChangeUnitTheme} className='rounded-full bg-white text-cyan-500 py-1 px-6 mt-12 cursor-pointer  dark:bg-[#4580BA] dark:text-[#FFFFFF]'>{isCelsius ? "Cambiar a °F" :"Cambiar a °C"}</button>

    </section>
  )
}

export default Weather