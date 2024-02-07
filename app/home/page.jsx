import React  from 'react';
function Template() {

  const url = 'https://opencritic-api.p.rapidapi.com/game/popular';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0578e44fd8msh0e1d0fa04d8c042p10b1d3jsn0d904c5905bf',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};

async function API () {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

    API()
    return (
      
      <div>
        
        {/*<Header /> 
        <Sidebar />*/}
        <div className="content">
        <p>Home</p>
          {/* Your page content goes here */}
        </div>
        {/*<Footer /> 
        <Sidebar />*/}
      </div>
    );
  }
  
  export default Template;