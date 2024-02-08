// a POST handler to bypass CORS
export async function POSTAPI() {
    const res = await fetch(
        "https://api.igdb.com/v4/games/", 
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Client-ID': 'h52g37gnvubn7ov6m9ikd9lr2ftniq',
            'Authorization': 'Bearer 4wjk8ry8t21ewrrtvcda2arwtd49ur',
          },
          body: 'fields id,name,rating; where name ~ "a"*; sort rating desc; limit 3;'
      })
        
    
      const data = res.json();    // deserialize the fetched data as json
      return Response.json(data);
  }