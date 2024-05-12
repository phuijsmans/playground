import "../css/ShowChampionList.css";
import { ShowChampionsPortraitList } from "./ShowChampionsPortraitList";

import { useNavigate } from "react-router-dom";

export const ShowChampionsList = ({ allChampions, freeChampionsRotation }) => {
  const championsList = Object.values(allChampions);

  const navigate = useNavigate();
  const test = (champion) => {
    navigate(champion.id);
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
      </div>
    </>
  );
};
