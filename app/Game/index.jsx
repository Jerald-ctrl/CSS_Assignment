import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function disp(){
    return (
        <div className="game" id = "container">
          <div id = 'game'>  
          </div >
          <App /> 
        </div>
      );
    }
    
export default disp
registerServiceWorker();