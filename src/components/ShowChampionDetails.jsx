import "../css/ShowChampionDetails.scss";
import "../css/styling/champion-details-elements.scss";

export const ShowChampionDetails = ({ champion, onClick }) => {
  const clickHandler = (e) => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <>
      <div
        className="container-champion-details"
        onClick={(e) => clickHandler(e)}
      >
        <div className="background">
          <h1 className="champion-name">{champion.name}</h1>
          <div className="champion-navigation">
            <div className="champion-nav-button"></div>
          </div>
          <div className="flex-box">
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
      </div>
    </>
  );
};
