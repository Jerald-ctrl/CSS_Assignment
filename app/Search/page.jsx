"use client";
import "@/app/Search/page.css"


import Chart from "chart.js/auto";
import React from "react";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useEffect, useRef } from "react";
import LineChart from "@/app/Search/chart.jsx";
import PieChart from "./piechart";
// import PieChart from './piechart';



Chart.register(CategoryScale);
{/* Uhh this is a version that assumes the data is already initialised, this should init a empty fields first before populating it*/ }



export default function App() {
  const [clicked, setClicked] = useState(0);
  const [update, setUpdate] = useState(false);
  const [chartData1, setChartData1] = useState(null);
  const [chartData2, setChartData2] = useState(null);
  const [chartData3, setChartData3] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const inputRef = useRef();
 //useEffect that tracks each time the button is pressed
 
 
  useEffect(() => {

    if (clicked > 0) {
  setallChartData();
  console.log("setChartData called");
  
  function setallChartData() {
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
      setClicked(false); 
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
          'x-api-key': "8h9MSa7wuD3E6FCP59yCg4U54FRsPNod83WtGv6c",
        },
        body: `fields id,name,rating,cover; where name ~ "${inputRef.current.value}"*; sort rating desc; limit 3;`
    });
  
    const data = await res.json();
    console.log("Data in callAPI:", data);
    setApiResponse(await data);
    console.log(data,"set response to ",apiResponse);
    
  }

{
  function handleTextboxChange(){
  
    
    
   
  };

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
  console.log(apiResponse[0].name)
  return (
    <div>
     
     <div className="Search-body" id="container">
        <div id='Search-body-text'>
         
          <p>Game: {apiResponse[0].name}</p>
          <p>ID: {apiResponse[0].id}</p>
          <p>Rating: {apiResponse[0].rating}</p>
        </div >
        <PieChart chartData={chartData1}/>
        {/* <LineChart chartData={chartData} />    */}
      </div>
      <div className="Search-body" id="container">
        <div id='Search-body-text'>
         
          <p>Game: {apiResponse[1].name}</p>
          <p>ID: {apiResponse[1].id}</p>
          <p>Rating: {apiResponse[1].rating}</p>
        </div >
        <PieChart chartData={chartData2}/>
        {/* <LineChart chartData={chartData} />    */}
      </div>
      <div className="Search-body" id="container">
        <div id='Search-body-text'>
          
          <p>Game: {apiResponse[2].name}</p>
          <p>ID: {apiResponse[2].id}</p>
          <p>Rating: {apiResponse[2].rating}</p>
        </div >
        <PieChart chartData={chartData3}/>
        {/* <LineChart chartData={chartData} />    */}
      </div>
    </div>
  );
};


  return (
    
    <div>
      <div className = 'Search-input' id="container">
      <label>
      
      <input type="text" ref={inputRef}id="Search-input"/>
        {/* <input value={firstName} onChange={e => setFirstName(e.target.value)} /> */}
      </label>
      
      <button onClick={handleButtonClick}>Render Chart</button>
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