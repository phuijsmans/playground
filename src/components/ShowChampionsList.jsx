import { ShowChampionsPortraitList } from "./ShowChampionsPortraitList";

import { useLoaderData, useNavigate } from "react-router-dom";

export const ShowChampionsList = ({ allChampions, freeChampionsRotation }) => {
  const championsList = Object.values(allChampions);

  // const testList = useLoaderData;
  // console.log(testList);

  const navigate = useNavigate();
  const goTo = (champion) => {
    navigate(champion.id);
  };

  return (
    <>
      <h2>League of Legends Champions</h2>
      <div className="center">
        <div className="flex-container">
          {championsList.map((champion) => (
            <ShowChampionsPortraitList
              key={champion.key}
              champion={champion}
              onClick={() => goTo(champion)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
