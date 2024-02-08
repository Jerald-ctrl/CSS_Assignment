"use client";
import "@/app/Steam/page.css"
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
              'X-RapidAPI-Key': '0578e44fd8msh0e1d0fa04d8c042p10b1d3jsn0d904c5905bf',
              'X-RapidAPI-Host': 'video-game-news.p.rapidapi.com'
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
            return (<div className='api-body'>
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
import { Data } from "@/app/Steam/data";

import LineChart from "@/app/Steam/chart";


Chart.register(CategoryScale);
 {/* Uhh this is a version that assumes the data is already initialised, this should init a empty fields first before populating it*/}
export default function App() {
    const [chartData, setChartData] = useState(
        {
        labels: Data.map((data) => data.year), 
         /*label: "Users Gained ",*/
        datasets: [
            {
              label: "User Gain",
              data: Data.map((data) => data.userGain)
            },
            {
                label: "User Loss",
                data: Data.map((data) => data.userLost)
            },
          ],        
        }
        );
        
    
        return (
            <div>
                <div className="api-body" id = "container">
              <div id = 'api-body-text'>
              <h1>Welcome to my Chart App!</h1>
                <p>This is some additional text.</p>
                
                
                <p>This is some additional text.</p>
                <p>This is some additional text.</p>
                
              </div >
              
              <LineChart chartData={chartData} options={{ maintainAspectRatio: false }} id="api-body-chart"/>
            
              
                </div>
                <div className="api-body" id = "container">
              <div id = 'api-body-text'>
              <h1>Welcome to my Chart App!</h1>
                <p>This is some additional text.</p>
                
                
                <p>This is some additional text.</p>
                <p>This is some additional text.</p>
                
              </div >
              
              <LineChart chartData={chartData} options={{ maintainAspectRatio: false }} id="api-body-chart"/>
            
              
                </div>
                <div className="api-body" id = "container">
              <div id = 'api-body-text'>
              <h1>Welcome to my Chart App!</h1>
                <p>This is some additional text.</p>
                
                
                <p>This is some additional text.</p>
                <p>This is some additional text.</p>
                
              </div >
              
              <LineChart chartData={chartData} options={{ maintainAspectRatio: false }} id="api-body-chart"/>
            
              
                </div>
            </div>
            
            
          );
    
 
   
  }


