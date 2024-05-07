import "../css/ShowChampionDetails.scss";

export const ShowChampionDetails = ({ champion, onClick }) => {
  const clickHandler = (e) => {
    e.stopPropagation();
    onClick(e);
  };
  console.log(champion);

  return (
    <>
      <div
        className="container-champion-details"
        onClick={(e) => clickHandler(e)}
      >
        <div className="background">
          <p>{champion.name}</p>
        </div>
      </div>
    </>
  );
};
