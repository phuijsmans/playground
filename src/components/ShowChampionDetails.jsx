import { Link } from "react-router-dom";
import "../css/ShowChampionDetails.scss";
import "../css/styling/champion-details-elements.scss";

export const ShowChampionDetails = ({ champion }) => {
  const championName = champion.name;
  const championSplashArt = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
  console.log(champion);

  return (
    <>
      <div className="container-champion-details">
        <Link to={"../champions"}>Back</Link>

        <h1 className="champion-name">{championName}</h1>
        <div className="champion-navigation">
          <div className="champion-nav-button"></div>
        </div>
        <div className="flex-box">
          <img src={championSplashArt} />
          <div className="flex-box-stats">
            {/* {Object.keys(champion.stats).map((name, value) => {
              return (
                <div key={name} className="stats">
                  <p>
                    {name}: {Object.values(champion.stats)[value]}
                  </p>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};
