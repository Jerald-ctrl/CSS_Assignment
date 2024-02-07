"use client";
import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line react/prop-types
function LineChart({ chartData }) {

    
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
      
        data={chartData}
        options={{
           width: '1000px',
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2021"
            },
            legend: {
              display: true
            }
          }
        }}
      />

    </div>
  );
}
export default LineChart;