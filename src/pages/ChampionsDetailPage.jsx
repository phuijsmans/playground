import { useParams } from "react-router-dom";
import { ShowChampionDetails } from "../components/ShowChampionDetails";

export const ChampionsDetailPage = ({ championsList }) => {
  const searchParams = useParams();

  const getChampion = (championsList) => {
    for (const champion of Object.values(championsList)) {
      if (champion.id === searchParams.id) {
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
