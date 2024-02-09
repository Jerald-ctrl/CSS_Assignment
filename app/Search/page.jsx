"use client";
import useSWR from 'swr'
import "@/app/Search/page.css"


import Chart from "chart.js/auto";
import React from "react";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "@/app/Search/data.js";
import { useEffect } from "react";
import LineChart from "@/app/Search/chart";
import { POST } from './router/route';
import PieChart from './piechart';



Chart.register(CategoryScale);
{/* Uhh this is a version that assumes the data is already initialised, this should init a empty fields first before populating it*/ }



export default function App() {
  const [clicked, setClicked] = useState(0);
  const [update, setUpdate] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [textboxValue, setTextboxValue] = useState('');
  const [apiData, setApiData] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);
 
 //useEffect that tracks each time the button is pressed
 


  useEffect(() => {

    if (clicked > 0) {
      console.log("setChartData called");
      
      // setChartData(
      //   {

        
      //     labels: ["User likes","User dislikes"], 
      //     datasets: [
      //       {
      //         label: "Review of People",
      //         //data: apiData.map((data) => data.rating),
      //         data: [100,100],
      //         backgroundColor: [
      //           "red",
      //           "green",
      //         ],
      //         borderColor: "black",
      //         borderWidth: 2,
      //       }
      //     ]
      // });
      
      
      
  //    const testChartData = {

        
  //     labels: ["User likes","User dislikes"], 
  //     datasets: [
  //       {
  //         label: "Review of People",
  //         //data: apiData.map((data) => data.rating),
  //         data: [100,100],
  //         backgroundColor: [
  //           "red",
  //           "green",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 2,
  //       }
  //     ]
  // };
    setApiData(apiResponse);
    console.log("ran setApiData");
  
    console.log("apiData (hi):",{apiResponse});
      setUpdate(true);
      setClicked(false); 
    }
  }, [apiResponse]); // Dependency array ensures this effect runs only when `clicked` changes
  async function callAPI() {
    console.log("Api Called");
    const res = await fetch(
      "https://hg3xf9f66l.execute-api.us-west-2.amazonaws.com/production/v4/games?",{ 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': "8h9MSa7wuD3E6FCP59yCg4U54FRsPNod83WtGv6c",
        },
        body: `fields id,name,rating; where name ~ "${textboxValue}"*; sort rating desc; limit 3;`
    });
  
    const data1 = await res.json();
    const data = await JSON.stringify(data1);
    
    console.log("Data in callAPI:", data);
    setApiResponse(data1);
    console.log(data,"set response to ",apiResponse);
    return JSON.stringify(data);
  }

{
  const handleTextboxChange = (event) => {
    setTextboxValue(event.target.value);
  };

async function handleButtonClick()
{
  console.log("button pressed");
  callAPI();
 
  setClicked((prev) => prev+1);
}  

function UpdateData()
{
  console.log("UpdateData called");
  console.log([apiData]);
  const ids = apiData.map(obj => obj.id);
  const names = apiData.map(obj => obj.name);
  const ratings = apiData.map(obj => obj.rating);

  console.log("ids",ids); // [46986, 456, 25683]  
  console.log("names",names); // ["StarCraft II: Trilogy", "StarCraft: Brood War", "StarCraft: Remastered"]
  console.log("ratings",ratings); // [91.47109076056321, 89.56724607388401, 89.0670981820052]
}
  function DisplayData() {
    
    return (
      <div>
       
        <div className="Search-body" id="container">
          <div id='Search-body-text'>
            <h1>Search: {textboxValue}</h1>
            <p>Game: {apiResponse[0].name}</p>
            <p>ID: {apiResponse[0].id}</p>
            <p>Rating: {apiResponse[0].rating}</p>
          </div >
          {/* <LineChart chartData={chartData} />    */}
        </div>
        <div className="Search-body" id="container">
          <div id='Search-body-text'>
            <h1>Search: {textboxValue}</h1>
            <p>Game: {apiResponse[1].name}</p>
            <p>ID: {apiResponse[1].id}</p>
            <p>Rating: {apiResponse[1].rating}</p>
          </div >
          {/* <LineChart chartData={chartData} />    */}
        </div>
        <div className="Search-body" id="container">
          <div id='Search-body-text'>
            <h1>Search: {textboxValue}</h1>
            <p>Game: {apiResponse[2].name}</p>
            <p>ID: {apiResponse[2].id}</p>
            <p>Rating: {apiResponse[2].rating}</p>
          </div >
          {/* <LineChart chartData={chartData} />    */}
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
          {/* <PieChart chartData={chartData}/> */}
          
        </div>
      )}


    </div>
    
  );

}
}