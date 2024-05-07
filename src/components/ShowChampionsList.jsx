// import { useContext } from "react";
// import { ChampionsContext } from "./Contexts";
import "../css/ShowChampionList.css";
import { ShowChampionsPortraitList } from "./ShowChampionsPortraitList";

export const ShowChampionsList = ({ allChampions, freeChampionsRotation }) => {
  // const { champions } = useContext(ChampionsContext);
  const championsList = Object.values(allChampions);

  return (
    <div>
      <h2>League of Legends Champions</h2>
      <div>
        <div className="flex-container">
          {championsList.map((champion) => (
            <ShowChampionsPortraitList key={champion.key} champion={champion} />
          ))}
        </div>
      </div>
    </div>
  );
};
