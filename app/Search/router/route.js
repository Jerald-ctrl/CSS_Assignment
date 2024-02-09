// a POST handler to bypass CORS

export async function POST() {
   
    const res = await fetch(
      "https://hg3xf9f66l.execute-api.us-west-2.amazonaws.com/production/v4/games",{ 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': "8h9MSa7wuD3E6FCP59yCg4U54FRsPNod83WtGv6c",
          // 'Client-ID': 'h52g37gnvubn7ov6m9ikd9lr2ftniq',
          // 'Authorization': 'Bearer 4wjk8ry8t21ewrrtvcda2arwtd49ur',
        },
        body: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
     

      console.log(await res.json() + "ROUTEJS");
      //return Response.json(data)
        
    
      // const data = res.json();    // deserialize the fetched data as json
      // data.headers = {'Content-Type':"application/json"};
      // console.log("hi");
      // return new Response(JSON.stringify(data), {headers:{
      //   'Content-Type':"application/json"}, status: 201,
      
      // })
      const data = "ello";    // deserialize the fetched data as json
      console.log();
      return res.json();
      
      


      
  }