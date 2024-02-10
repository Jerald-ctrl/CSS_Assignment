"use client";
import "@/app/Search/page.css"


import Chart from "chart.js/auto";
import React from "react";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useEffect, useRef } from "react";

import PieChart from "../components/piechart";
// import PieChart from './piechart';


// init code for chart
Chart.register(CategoryScale);




export default function App() {
  const [clicked, setClicked] = useState(0);
  const [update, setUpdate] = useState(false);
  const [chartData1, setChartData1] = useState(null);
  const [chartData2, setChartData2] = useState(null);
  const [chartData3, setChartData3] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const inputRef = useRef();

 
 
  useEffect(() => {

    if (clicked > 0) { 
      //ensures that the code only runs when the button is pressed at least once


  setallChartData();
  console.log("setChartData called");
  
  function setallChartData() {
    //sets the value of all the chart Data
    if (!apiResponse || apiResponse.length < 3) {
      // Handle the case when apiResponse is null or doesn't have enough data
      return;
    }
  setChartData1( {
    labels: ["User likes","User dislikes"], 
    datasets: [
      {
        // removed label to allow the data to have the labels[i] as its label
        data: [apiResponse[0].rating,100-apiResponse[0].rating],
        backgroundColor: [
          "green",
          "red",  
          

        ],
        borderColor: "black",
        borderWidth: 2,
      }

    ]
  });

  setChartData2( {
    labels: ["User likes","User dislikes"], 
    datasets: [
      {
        // removed label to allow the data to have the labels[i] as its label
        data: [apiResponse[1].rating,100-apiResponse[1].rating],
        backgroundColor: [
          "green",
          "red",

        ],
        borderColor: "black",
        borderWidth: 2,
      }

    ]
  });

  setChartData3( {
    labels: ["User likes","User dislikes"], 
    datasets: [
      {
        // removed label to allow the data to have the labels[i] as its label
        data: [apiResponse[2].rating,100-apiResponse[2].rating],
        backgroundColor: [
          "green",
          "red",

        ],
        borderColor: "black",
        borderWidth: 2,
      }

    ]
  });
}

      setUpdate(true); 
      console.log("Set update to true");
      
    }
  }, [apiResponse]); // Dependency array ensures this effect runs only when `clicked` changes

  
  async function callAPI() {
    console.log("Api Called");
    // console.log(textboxValue,inputRef.current.value);
    const res = await fetch(
      "https://hg3xf9f66l.execute-api.us-west-2.amazonaws.com/production/v4/games?",{ 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':  "8h9MSa7wuD3E6FCP59yCg4U54FRsPNod83WtGv6c",
        },
        body: `fields id,name,rating,slug; where name ~ "${inputRef.current.value}"*; sort rating desc; limit 3;` 
        //use of template literal to prevent spacing errors (DOCS)
    });
  
    const data = await res.json();
    console.log("Data in callAPI:", data);
    setApiResponse(await data);
    console.log(data,"set response to ",apiResponse);
    
  }

{


async function handleButtonClick()
{
  // setTextboxValue(inputRef.current.value);
  console.log('set text box value to',inputRef.current.value);
  console.log("button pressed");
  await callAPI();
 
  setClicked((prev) => prev+1);
}  

function DisplayData () {

 
  console.log("Displayed Data")
    if (!apiResponse || apiResponse.length < 3) {
      //check if apiResponse is not fully fulfilled.
    
      return (
      <div className="Search-body" id="container">
      <h1>Data not fully fulfilled. Please try another search</h1>
      
      
    </div>);
    }

  return (
    // return function for main page
    <div>
     
     <div className="Search-body" id="container">
        <div id='Search-body-text'>
         
          <p>Game: {apiResponse[0].name}</p>
          <p>ID: {apiResponse[0].id}</p>
          {/* Conditionally render the rating */}
          {typeof apiResponse[0].rating !== 'undefined' ? (
            <p>Rating: {apiResponse[0].rating}</p>
          ) : (
            <p>Rating: Rating not found</p>
          )}
          <a href={`https://www.igdb.com/games/${apiResponse[0].slug}`}>Game Website</a>
        </div >
        <PieChart chartData={chartData1}/>
        
      </div>
      <div className="Search-body" id="container">
        <div id='Search-body-text'>
         
          <p>Game: {apiResponse[1].name}</p>
          <p>ID: {apiResponse[1].id}</p>
          {/* Conditionally render the rating */}
          {typeof apiResponse[1].rating !== 'undefined' ? (
            <p>Rating: {apiResponse[1].rating}</p>
          ) : (
            <p>Rating: Rating not found</p>
          )}
          <a href={`https://www.igdb.com/games/${apiResponse[1].slug}`}>Game Website</a>
        </div >
        <PieChart chartData={chartData2}/>
       
      </div>
      <div className="Search-body" id="container">
        <div id='Search-body-text'>
          
          <p>Game: {apiResponse[2].name}</p>
          <p>ID: {apiResponse[2].id}</p>
          {/* Conditionally render the rating */}
          {typeof apiResponse[2].rating !== 'undefined' ? (
            <p>Rating: {apiResponse[2].rating}</p>
          ) : (
            <p>Rating: Rating not found</p>
          )}
          <a href={`https://www.igdb.com/games/${apiResponse[2].slug}`}>Game Website</a>
        </div >
        <PieChart chartData={chartData3}/>
  
      </div>
    </div>
  );
};


  return (
    
    <div id="container" >
      <div className = "Search-input" >
      <label>
      
      <input type="text" ref={inputRef}/>
        {/* <input value={firstName} onChange={e => setFirstName(e.target.value)} /> */}
      </label>
      
      <button onClick={handleButtonClick}>Search Games</button>
      </div>
      
      {chartData1 && (
        <div>
          <DisplayData />
          
          
        </div>
      )}


    </div>
    
  );

}
}