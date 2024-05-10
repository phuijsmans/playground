import { ShowChampionsList } from "../components/ShowChampionsList";
import { ContextSelectedChampion } from "../ContextLibrary";
import { useState } from "react";

export const ChampionsPage = ({ allChampions, freeChampionsRotation }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div id="container">
        {allChampions ? (
          <ContextSelectedChampion.Provider value={{ text, setText }}>
            <ShowChampionsList
              allChampions={allChampions}
              freeChampionsRotation={freeChampionsRotation}
            />
          </ContextSelectedChampion.Provider>
        ) : (
          <div>
            <p>
              Loading champion list <br /> Please wait
            </p>
          </div>
        )}
      </div>
    </>
  );
};
