export const ShowChampionsPortraitList = ({ champion, onClick }) => {
  const portraitName = champion.id;
  const portraitURL = `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${portraitName}.png`;

  return (
    <div className="portrait" onClick={onClick}>
      <img src={portraitURL} />
    </div>
  );
};
