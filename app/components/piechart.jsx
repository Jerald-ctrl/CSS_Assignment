"use client";
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {


  
  return (
    <div id="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "User Rating"
            }
          },
          maintainAspectRatio: false // Add this option to ignore aspect ratio
        }}
      />
    </div>
  );
}
export default PieChart;