import { Link, useLoaderData } from "react-router-dom";
import { ShowChampionsList } from "../components/ShowChampionsList";

export const ChampionsPage = ({ allChampions, freeChampionsRotation }) => {
  // const [championDetails, setChampionDetails] = useState("");

  // const test = useLoaderData;
  // console.log(test);

  return (
    <>
      <div id="container">
        <Link to="/">Back</Link>

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
