import React from 'react'
import cities from '../../lib/city.list.json'

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

export default function  City({slug, data}) {
    console.log(data);
  return (
    <div>
        <h1>City Page</h1>
        <h2>{slug}</h2>
    </div>
  )
}
