import React, { useState, useEffect } from 'react';

function Lastgame() {
  const [games, setGames] = useState();

// Function to collect data
const getApiData = async () => {
  const response = await fetch(
    "https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022?key=8475b6432fb04413a327c81e90a627f7"
  ).then((response) =>
  response.json()
)
.catch((err) => {
  console.log("Error : " + err);
})

console.log(response)

setGames(response);
};

useEffect(() => {
  getApiData();
}, [])

  return (
    <div>
    {games &&
      games.map((game) => (
            console.log(game)
      )
    )
    }
    </div>
  )
}

export default Lastgame;
