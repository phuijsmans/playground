import { useLoaderData } from "react-router-dom";
import { ShowChampionDetails } from "../components/ShowChampionDetails";

export const ChampionsDetailPage = ({ championsList }) => {
  const championName = useLoaderData();

  const getChampion = (championsList) => {
    for (const champion of Object.values(championsList)) {
      if (champion.id === championName) {
        return champion;
      }
    }
  };
  const champion = getChampion(championsList);

  return (
    <>
      <ShowChampionDetails champion={champion} />
    </>
  );
};
