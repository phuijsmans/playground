import { ShowChampionsList } from "../components/ShowChampionsList";

export const ChampionsPage = ({ allChampions, freeChampionsRotation }) => {
  // const [championDetails, setChampionDetails] = useState("");
  return (
    <>
      <div id="container">
        {allChampions ? (
          <ShowChampionsList
            allChampions={allChampions}
            freeChampionsRotation={freeChampionsRotation}
          />
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
