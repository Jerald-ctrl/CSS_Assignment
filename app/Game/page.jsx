"use client"

import React from 'react';
import Game from '@/app/Game/Game.jsx'; // Import the Game component
import '@/app/Game/Game.css'; // Import the CSS file

function disp() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  function disptitle(event) {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("").map((letter, index) => {
        if(index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join("");

      if(iterations >= event.target.dataset.value.length) {
        clearInterval(interval)
      }

      iterations += 1/2;

    }, 30);
  }

  return (
    <body>
      <div>
        <h1 onMouseOver={disptitle} data-value="Conways Game of Life">Conways Game of Life</h1>
      </div>
      <div className="game" id="container">
        <div id="game"></div>
        <Game id="game"/> 
      </div>
      <h2>What is the Conways Game of Life?</h2>
      <p>
      Conway's Game of Life is a cellular automaton devised by mathematician John Conway in 1970. 
      It's played on a grid of cells, each of which can be in one of two states: alive or dead. 
      The game unfolds in generations, where the state of each cell in the grid is determined by a set of rules based on its neighboring cells. 
      These rules govern the birth, survival, and death of cells, creating dynamic patterns and behaviors. 
      </p>
      <p>
      At each generation, the fate of each cell is determined by its immediate neighbors. 
      A living cell with fewer than two living neighbors dies of loneliness, while a cell with more than three living neighbors dies from overcrowding. 
      Conversely, a dead cell with exactly three living neighbors comes to life, simulating reproduction. Cells that satisfy neither condition remain in their current state. 
      Through these simple rules, intricate patterns emerge, ranging from static structures like blocks and oscillators to more complex configurations like gliders and spaceships that move across the grid.
      </p>
      <p>
      The Game of Life is fascinating not only for its simplicity but also for the complexity that arises from its basic rules. It serves as a model for emergent behavior and self-organization in complex systems. 
      While it lacks explicit goals or player interaction, it's a powerful tool for exploring computational universality, pattern formation, and the nature of life itself, capturing the essence of evolution and emergence in a mesmerizing and accessible format.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Grid: The game is played on a two-dimensional grid of cells.</li>
        <li>States: Each cell can be in one of two states: alive or dead.</li>
        <li>Neighbors: Each cell has eight neighboring cells (horizontal, vertical, and diagonal).</li>
        <li>Birth: A dead cell with exactly three living neighbors becomes alive in the next generation.</li>
        <li>Survival: A living cell with two or three living neighbors remains alive in the next generation.</li>
        <li>Death: A living cell with fewer than two living neighbors dies from loneliness, and a living cell with more than three living neighbors dies from overcrowding.</li>
        <li>Generation: The state of all cells is updated simultaneously for each generation based on these rules.</li>
      </ul>
    </body>
  );
}

export default disp; // Export the function directly, not the result of calling it
