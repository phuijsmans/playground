import { Link, useLoaderData } from "react-router-dom";

export const ShowChampionDetails = ({ champion }) => {
  const championName = champion.name;
  const championSplashArt = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
  // console.log(champion);
  console.log(useLoaderData());

  return (
    <>
      <div id="container-champion-details">
        <div id="background">
          <img id="champion-splash-art-blurred" src={championSplashArt} />
          {/* <div className="gradient"></div> */}
        </div>
        <div id="wrapper-content">
          <div id="champion-splash-art">
            <img src={championSplashArt} />
          </div>
          <div id="champion-info">
            <Link id="link-back" to={"/champions"}>
              Back
            </Link>
            <div id="champion-id">
              <h1 id="champion-name">{championName}</h1>
              <h2 id="champion-title">{champion.title}</h2>
              <div id="champion-backstory">
                <p>{champion.blurb}</p>
              </div>
            </div>
            <div id="champion-basic-info"></div>
            <div id="champion-navigation">
              <div id="champion-nav-button"></div>
            </div>
            <div className="flex-box">
              <div className="flex-box-stats">
                {Object.keys(champion.stats).map((name, value) => {
                  return (
                    <div key={name} className="stats">
                      <p>
                        {name}: {Object.values(champion.stats)[value]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
