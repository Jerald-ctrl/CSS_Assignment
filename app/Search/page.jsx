"use client";
import useSWR from 'swr'
import "@/app/Search/page.css"
/*
import React  from 'react';
import { useState, useEffect } from 'react';


    

    

      


function SteamScreen() {
    const [apiData, setApiData] = useState(null);
    const [contentType, setContentType] = useState(null);

    setApiData () 
    {
    fetch("https://freeipapi.com/api/json/")
    .then(response => {
      setContentType(response.headers.get('content-type'));
      return response.json();
    })
    .then(data => setApiData(data))
    .catch(error => console.error("Error fetching data:", error));
    }

    useEffect(() => {
        setApiData();
      }, []);


    return (

        <div className='Steam-Info'>
            {apiData ? (
          <div>
          <h1>Your IP is {apiData.ipAddress}</h1> 
          <h1>Your City is {apiData.cityName}</h1> 
          <h1>Your Continent is {apiData.continent}</h1> 
          <h1>Your Timezone is {apiData.timeZone}</h1>
          <button onClick={setApiData}></button>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
        </div>

        );

  }
  
  export default SteamScreen;
*/

/*
  import React, { useState, useEffect } from 'react';
  function YourComponent() {
    const [apiData, setApiData] = useState(null);
    const [contentType, setContentType] = useState(null);
  
    useEffect(() => {
        fetchData();
      }, []);

      
    
    const url = 'https://video-game-news.p.rapidapi.com/all';
    const options = {
          method: 'GET',
          headers: {
              'X-RapidSearch-Key': '0578e44fd8msh0e1d0fa04d8c042p10b1d3jsn0d904c5905bf',
              'X-RapidSearch-Host': 'video-game-news.p.rapidapi.com'
          }
      };
    

    const fetchData = () => {
      fetch("https://freeipapi.com/api/json/")
        .then(response => {
          setContentType(response.headers.get('content-type'));
          return response.json();
        })
        .then(data => setApiData(data))
        .catch(error => console.error("Error fetching data:", error));
        
    };
  


    function RenderData()
    {
        if (apiData != null) 
        {
            return (<div className='Search-body'>
              <h1>Your IP is {apiData.ipAddress}</h1> 
              <h1>Your City is {apiData.cityName}</h1> 
              <h1>Your Continent is {apiData.continent}</h1> 
              <h1>Your Timezone is {apiData.timeZone}</h1>
              </div>);
        }
        else {
            return (<p>Loading data...</p>);
        }
    }
    return RenderData();
}
    
    
    
        

    
*/

import Chart from "chart.js/auto";
import React from "react";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "@/app/Search/data.js";
import { useEffect } from "react";
import LineChart from "@/app/Search/chart";
import { POST } from './router/route';



Chart.register(CategoryScale);
{/* Uhh this is a version that assumes the data is already initialised, this should init a empty fields first before populating it*/ }



export default function App() {
  const [clicked, setClicked] = useState(0);
  const [update, setUpdate] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [textboxValue, setTextboxValue] = useState('');
 //useEffect that tracks each time the button is pressed
  useEffect(() => {

    if (clicked > 0) {
      // Simulating async data fetch
      setChartData({

        labels: Data.map((data) => data.year),
        datasets: [
          {
            id: 1,
            label: "User Gain",
            data: Data.map((data) => data.userGain)
          },
          {
            id: 2,
            label: "User Loss",
            data: Data.map((data) => data.userLost)
          }
        ]
      });
      
      
      setUpdate(true);
      setClicked(false); 
    }
  }, [clicked]); // Dependency array ensures this effect runs only when `clicked` changes
  
 
/*
async function callAPI() {
  const fetcher = (...args) => POST(...args).then((res) => res.json());
  const { data } = await POST("http://localhost:3000/Search/router", {method: 'POST'});
  console.log("data (page.jsx) = " + data);
} */
  /*
  fetch(
    "https://api.igdb.com/v4/search",
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': clientId,
        'Authorization': accessToken,
      },
      body: `fields id,name,rating; where name ~ '${textboxValue}'*; sort rating desc; limit 44;`
  })
    .then(response => {
        console.log(response.json());
    })
    .catch(err => {
        console.error(err);
    });
} */

  const handleTextboxChange = (event) => {
    setTextboxValue(event.target.value);
  };

function handleButtonClick()
{

 
  setClicked((prev) => prev+1);
}  

  function DisplayData() {
    
    return (
      <div>
       
        <div className="Search-body" id="container">
          <div id='Search-body-text'>
            <h1>Game: {textboxValue}</h1>
            <p>Description: </p>
            
           
          </div >
          <LineChart chartData={chartData} />   
        </div>
      </div>
    );
    }

  return (
    
    <div>
      <div className = 'Search-input' id="container">
      <label>
      
      <input type="text" value={textboxValue} onChange={handleTextboxChange} id="Search-input"/>
        {/* <input value={firstName} onChange={e => setFirstName(e.target.value)} /> */}
      </label>
      
      <button onClick={handleButtonClick}>Render Chart</button>
      </div>
      
      {update && (
        <div>
          <DisplayData />
          
          
        </div>
      )}


    </div>
    
  );

}
