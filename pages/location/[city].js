import React from 'react'
import cities from '../../lib/city.list.json'
import Header from '../../components/Layout/Header'


export async function getServerSideProps(context) {
    const city = getCity(context.params.city);

    if(!city){
        return{
            notFound: true,
        };
    }

    const apiKey = process.env.API_KEY;

    

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${apiKey}&units=metric&exclude=minutely`);

    const data = await res.json();

    if(!data){
        return {
            notFound : true,
        };
    }

    console.log(data);

    const slug = context.params.city;

    return {
        props:{
            slug: slug,
            data: data,
        },
    };
}

const getCity = param => {
    const cityParam = param.trim(); 
    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];
    
    if(!id){
        return null;
    }

    const city = cities.find(city => city.id.toString() == id);

    if(city) {
        return city; 
    }else {
        return null;
    }
};

const City = ({ slug, data }) => {
    if (!data) {
      return <p>Loading...</p>; // You can display a loading message while fetching data.
    }
  
    const {
      name,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      weather,
      wind,
      visibility,
      sys: { country },
    } = data;
  
    return (
        <>
        <Header/>
     <div className="container mx-auto p-4 bg text-white rounded shadow-lg mt-52">
      <h1 className="text-3xl font-bold text-center text-blue-500">City Page</h1>
      <h2 className="text-2xl text-center">{slug}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-10">
        {/* Location Card */}
        <div className="bg-white rounded p-4 shadow-md hover:shadow-lg hover:scale-110 transition-transform">
          <h3 className="font-semibold mb-2 text-blue-500 text-center text-2xl">Location</h3>
          <img src="/locationCard.png" alt="" className='mx-auto'/>
          <h2 className='mt-4 text-center text-xl'>Details</h2>
          <p className='text-center text-xl'>City: {name}, {country}</p>
        </div>

        {/* Temperature Card */}
        <div className="bg-white rounded p-4 shadow-md hover:shadow-lg hover:scale-110 transition-transform ">
          <h3 className="font-semibold mb-2 text-blue-500 text-center text-2xl">Temperature</h3>
          <img src="/temperatureCard.png" alt="temperature" className='w-[18rem] mx-auto'/>
          <h2 className='mt-4 text-center text-xl'>Details</h2>
          <div className='text-center text-xl'>
          <p>Temperature: {temp}&deg;C</p>
          <p>Feels Like: {feels_like}&deg;C</p>
          <p>Min Temperature: {temp_min}&deg;C</p>
          <p>Max Temperature: {temp_max}&deg;C</p>
          </div>
        </div>

        {/* Atmosphere Card */}
        <div className="bg-white rounded p-4 shadow-md hover:shadow-lg hover:scale-110 transition-transform">
          <h3 className="font-semibold mb-2 text-blue-500 text-center text-2xl">Atmosphere</h3>
          <img src="/atmosphereCard.png" alt="atmosphere" className='w-[20rem] mx-auto'/>
          <h2 className='mt-4 text-center text-xl'>Details</h2>
          <div className='text-center text-xl'>
          <p>Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
          </div>
        </div>

        {/* Weather Card */}
        <div className="bg-white rounded p-4 shadow-md hover:shadow-lg hover:scale-110 transition-transform">
          <h3 className="font-semibold mb-2 text-blue-500 text-center text-2xl">Weather</h3>
           <img src={"/weatherCard.jpg"} alt="Weather Icon" className="mt-2 w-[22rem] mx-auto" />
           <h2 className='mt-4 text-center text-xl'>Details</h2>
          <p className='text-center text-xl'>Weather: {weather[0].description}</p>
        </div>

        {/* Wind Card */}
        <div className="bg-white rounded p-4 shadow-md hover:shadow-lg hover:scale-110 transition-transform">
          <h3 className="font-semibold mb-2 text-blue-500 text-center text-2xl">Wind</h3>
          <img src="/windCard.png" alt="wind" className='w-[14rem] mx-auto mt-12'/>
          <h2 className='text-center text-xl mt-24'>Details</h2>
          <div className='text-center text-xl'>
          <p>Wind Speed: {wind.speed} m/s</p>
          <p>Wind Direction: {wind.deg}&deg;</p>
          </div>
        </div>

        {/* Visibility Card */}
        <div className="bg-white rounded p-4 shadow-md hover:shadow-lg hover:scale-110 transition-transform">
          <h3 className="font-semibold mb-2 text-blue-500 text-center text-2xl">Visibility</h3>
          <img src="/visiblityCard.png" alt="visiblity"className='w-[14rem] mx-auto mt-12' />
          <h2 className='mt-28 text-center text-xl'>Details</h2>
          <p className='text-center text-xl'>Visibility: {visibility} meters</p>
        </div>
      </div>
    </div>
      </>
    );
  };
  
  export default City;