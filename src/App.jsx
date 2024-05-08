import "./App.css";
import { useState } from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ShowChampionsList } from "./components/ShowChampionsList";

function App() {
  const RIOT_API_KEY = "RGAPI-92b8c787-0ddf-440a-b6fc-31aa828b705d";
  const GET_CHAMPIONS = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${RIOT_API_KEY}`;
  const URL_ALL_CHAMPIONS =
    "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_GB/champion.json";
  const [allChampions, setAllChampions] = useState();
  const [freeChampionsRotation, setFreeChampionsRotation] = useState();

  const fetchAllChampions = async () => {
    const response = await fetch(URL_ALL_CHAMPIONS).then((res) => res.json());
    setAllChampions(response.data);
  };
  fetchAllChampions();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div id="container">
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
          <Link to="test">Test</Link>
        </div>
      ),
    },
    {
      path: "test",
      element: (
        <div>
          <p>Test</p>
          <Link to="/">Back</Link>
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
