import { useState } from "react";
// import { ChampionsContext } from "./Contexts";
import "../css/ShowChampionList.css";
import { ShowChampionsPortraitList } from "./ShowChampionsPortraitList";
import { ShowChampionDetails } from "./ShowChampionDetails";

export const ShowChampionsList = ({ allChampions, freeChampionsRotation }) => {
  // const { champions } = useContext(ChampionsContext);
  const championsList = Object.values(allChampions);
  const [selectedChampion, setSelectedChampion] = useState(null);
  const test = (champion) => {
    setSelectedChampion(champion);
  };

  return (
    <div>
      <h2>League of Legends Champions</h2>
      <div>
        <div className="flex-container">
          {championsList.map((champion) => (
            <ShowChampionsPortraitList
              key={champion.key}
              champion={champion}
              onClick={() => test(champion)}
            />
          ))}
        </div>
        {selectedChampion ? (
          <>
            <ShowChampionDetails
              champion={selectedChampion}
              onClick={() => setSelectedChampion(null)}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
