import "./styles/scss/main.scss";
import { useEffect, useState } from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChampionsPage } from "./pages/ChampionsPage";
import { ChampionsDetailPage } from "./pages/ChampionsDetailPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const RIOT_API_KEY = "RGAPI-92b8c787-0ddf-440a-b6fc-31aa828b705d";
  // const GET_CHAMPIONS = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${RIOT_API_KEY}`;
  const URL_ALL_CHAMPIONS =
    "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_GB/champion.json";
  const [allChampions, setAllChampions] = useState(null);
  const [freeChampionsRotation, setFreeChampionsRotation] = useState(null);
  const test = (params) => {
    return params;
  };

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
          <HomePage />
        </>
      ),
    },
    {
      path: "champions",
      element: (
        <>
          {allChampions ? (
            <ChampionsPage
              allChampions={allChampions}
              freeChampionsRotation={freeChampionsRotation}
            />
          ) : (
            <>
              <p>Loading...</p>
            </>
          )}
        </>
      ),
      loader: () => {
        return allChampions;
      },
    },
    {
      path: `champions/:id`,
      element: (
        <>
          {allChampions ? (
            <>
              <ChampionsDetailPage championsList={allChampions} />
            </>
          ) : (
            <>
              <p>Loading...</p>
            </>
          )}
        </>
      ),
      loader: ({ params }) => {
        return test(params.id);
      },
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
