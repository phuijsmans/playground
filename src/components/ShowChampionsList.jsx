import { useContext, useState } from "react";
// import { ChampionsContext } from "./Contexts";
import "../css/ShowChampionList.css";
import { ShowChampionsPortraitList } from "./ShowChampionsPortraitList";
import { ShowChampionDetails } from "./ShowChampionDetails";
import { ContextSelectedChampion } from "../ContextLibrary";
import { useNavigate } from "react-router-dom";

export const ShowChampionsList = ({ allChampions, freeChampionsRotation }) => {
  // const { champions } = useContext(ChampionsContext);
  const championsList = Object.values(allChampions);

  // const [selectedChampion, setSelectedChampion] = useState(null);

  const { selectedChampion, setSelectedChampion } = useContext(
    ContextSelectedChampion
  );

  const navigate = useNavigate();
  const test = (champion) => {
    // setSelectedChampion(champion);
    // setText(champion.id);
    navigate(champion.id);
    console.log(champion.id);
  };

  return (
    <>
      <div>
        <h2>League of Legends Champions</h2>
        <div className="flex-container">
          {championsList.map((champion) => (
            <ShowChampionsPortraitList
              key={champion.key}
              champion={champion}
              onClick={() => test(champion)}
            />
          ))}
        </div>
        {/* {selectedChampion ? (
          <>
            <ShowChampionDetails
              champion={selectedChampion}
              test={text}
              onClick={() => setSelectedChampion(null)}
            />
          </>
        ) : (
          <>
            <h2>League of Legends Champions</h2>
            <div className="flex-container">
              {championsList.map((champion) => (
                <ShowChampionsPortraitList
                  key={champion.key}
                  champion={champion}
                  onClick={() => test(champion)}
                />
              ))}
            </div>
          </>
        )} */}
      </div>
    </>
  );
};
