import React  from 'react';
function SteamScreen() {
    return (
        <div>
            <a href="https://imgflip.com/i/8eu9dw"><img src="https://i.imgflip.com/8eu9dw.jpg" title="made at imgflip.com"/></a><div><a href="https://imgflip.com/memegenerator">from Imgflip Meme Generator</a></div>
        </div>

        );
  }
  
  export default SteamScreen;

/*
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
  
    return (
      <div>
        {apiData ? (
          <div>
          <h1>Your IP is {apiData.ipAddress}</h1> 
          <h1>Your City is {apiData.cityName}</h1> 
          <h1>Your Continent is {apiData.continent}</h1> 
          <h1>Your Timezone is {apiData.timeZone}</h1>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
  
  export default YourComponent;
  */
  