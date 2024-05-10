import "./App.css";
import { useEffect, useState } from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChampionsPage } from "./pages/ChampionsPage";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>Home page</h1>
          <Link to="champions">to champions</Link>
        </>
      ),
    },
    {
      path: "champions",
      element: (
        <div>
          <Link to="/">Back</Link>

          <ChampionsPage
            allChampions={allChampions}
            freeChampionsRotation={freeChampionsRotation}
          />
        </div>
      ),
    },
    {
      path: `champions/:id`,
      element: (
        <>
          <h1>test</h1>
        </>
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
