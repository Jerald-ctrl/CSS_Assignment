"use client";
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
  import React, { useState, useEffect } from 'react';
  function YourComponent() {
    const [apiData, setApiData] = useState(null);
    const [contentType, setContentType] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
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
            return (<div>
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
    
    
    
        

    
      
      
  
export default YourComponent;
  
