import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Temperature.css';


const Temperature = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Feni");

    useEffect(() => {
        const fetchApi = async () => {
            const API_KEY = `ae011add162146d7a9e00835210710`;
            const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=no`
            const response = await axios.get(url);
            // console.log(response.data);
            setCity(response.data);
        }

        fetchApi();
    }, [search]);
    const InputEvent = (e) => {

        setSearch(e.target.value);
    }

    return (

        <>
            <div className="container">
                <h1>Weather Forcast </h1>
                <input type="search" value={search} onChange={InputEvent} /><br />
            {
                !city ? "No data found" : (
                    <div>
                        <div className="result card">
                            <img src={city.current.condition.icon} alt="img"/>
                            <h2><span>Location : </span>{city.location.name}, {city.location.country}</h2>
                                <h2 > <span>Condition : </span>{city.current.condition.text}  </h2>
                                <h1> <strong>{city.current.temp_c}℃ </strong> /<br/> {city.current.temp_f}°F </h1>

                        </div>
                        </div>)}
                </div>
        </>
    )
}

export default Temperature;