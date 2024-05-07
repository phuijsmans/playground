import "../css/PortraitStyle.css";
import { useState } from "react";

export const ShowChampionsPortraitList = ({ champion, onClick }) => {
  const [portraitName, setPortraitName] = useState(
    champion.name.replace(" ", "").replace("'", "")
  );

  // check to see how many capital letters a string has.
  // const showNumberOfCapitalLetters = (portraitName.match(/[A-Z]/g) || []).length;

  const makeSingleCapital = ["KaiSa", "LeBlanc", "VelKoz", "ChoGath", "KhaZix"];

  if (portraitName === "Wukong") {
    setPortraitName("MonkeyKing");
  } else if (portraitName === "Nunu& Willump") {
    setPortraitName("Nunu");
  } else if (portraitName === "Dr.Mundo") {
    setPortraitName("DrMundo");
  } else if (portraitName === "RenataGlasc") {
    setPortraitName("Renata");
  } else if (
    portraitName === makeSingleCapital[0] ||
    portraitName === makeSingleCapital[1] ||
    portraitName === makeSingleCapital[2] ||
    portraitName === makeSingleCapital[3] ||
    portraitName === makeSingleCapital[4]
  ) {
    setPortraitName(portraitName[0] + portraitName.slice(1).toLowerCase());
  }

  const portraitURL = `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${portraitName}.png`;
  const test = () => {
    console.log(champion.name);
  };

  return (
    <div className="portrait" onClick={onClick}>
      <img src={portraitURL} />
    </div>
  );
};
