import React from 'react';
import Game from '@/app/Game/Game.jsx'; // Import the Game component
import '@/app/Game/Game.css'; // Import the CSS file

function disp(){
return (
    <div className="game" id = "container">
      <div id = 'game'>  
      </div >
      <Game id="game"/> 
    </div>
  );
}

export default disp