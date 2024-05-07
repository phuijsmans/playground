import "./App.css";
import { useState, useEffect } from "react";
// import { ChampionsContext } from "./components/Contexts";
import { ShowChampionsList } from "./components/ShowChampionsList";

function App() {
  const RIOT_API_KEY = "RGAPI-92b8c787-0ddf-440a-b6fc-31aa828b705d";
  const GET_CHAMPIONS = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${RIOT_API_KEY}`;
  const URL_ALL_CHAMPIONS =
    "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_GB/champion.json";
  const [allChampions, setAllChampions] = useState();
  const [freeChampionsRotation, setFreeChampionsRotation] = useState();

  useEffect(() => {
    const fetchAllChampions = async () => {
      const response = await fetch(URL_ALL_CHAMPIONS).then((res) => res.json());
      setAllChampions(response.data);
    };
    fetchAllChampions();
  }, []);

  //get free rotation from Riot api (need to update api key everyday because it expires each day)
  // useEffect(() => {
  //   const fetchFreeChampionsRotation = async () => {
  //     const response = await fetch(GET_CHAMPIONS).then((res) => res.json());
  //     setFreeChampionsRotation(response.freeChampionIds);
  //   };
  //   fetchFreeChampionsRotation();
  // }, []);

  // const sendRequest = async (method, URL) => {
  //   const options = {};
  //   options.method = method;
  //   await fetch(URL, options).then((res) => res.json());
  //   // await fetch(URL, options);
  // };

  // console.log(sendRequest("GET", GET_CHAMPIONS));

  // const sendRequest = async () => {
  //   const response = await fetch(GET_CHAMPIONS)
  //     .then((res) => res.json())
  //     .then((rotations) => {
  //       console.log(rotations.freeChampionIds);
  //       return rotations.freeChampionIds;
  //     });
  //   // const res = await response.json();
  //   // return response.freeChampionIds;
  //   // return response;
  // };

  // console.log(sendRequest());

  // fetchAllChampions();

  // console.log(allChampions);

  return (
    <>
      <div id="container">
        {/* <ChampionsContext.Provider value={allChampions}> */}
        {allChampions ? (
          <ShowChampionsList
            allChampions={allChampions}
            freeChampionsRotation={freeChampionsRotation}
          />
        ) : (
          <div>
            <p>
              Loading champion list <br /> Please wait
            </p>
          </div>
        )}

        {/* </ChampionsContext.Provider> */}
      </div>
    </>
  );
}

export default App;
