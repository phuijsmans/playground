import "../css/PortraitStyle.css";
import { useState } from "react";

export const ShowChampionsPortraitList = ({ champion }) => {
  const [portraitName, setPortraitName] = useState(
    champion.name.replace(" ", "").replace("'", "")
  );

  // check to see how many capital letters a string has.
  // const showNumberOfCapitalLetters = (portraitName.match(/[A-Z]/g) || []).length;

  const weirdCapitals = ["KaiSa", "LeBlanc", "VelKoz", "ChoGath", "KhaZix"];

  if (portraitName === "Wukong") {
    setPortraitName("MonkeyKing");
  } else if (portraitName === "Nunu& Willump") {
    setPortraitName("Nunu");
  } else if (portraitName === "Dr.Mundo") {
    setPortraitName("DrMundo");
  } else if (portraitName === "RenataGlasc") {
    setPortraitName("Renata");
  } else if (
    portraitName === weirdCapitals[0] ||
    portraitName === weirdCapitals[1] ||
    portraitName === weirdCapitals[2] ||
    portraitName === weirdCapitals[3] ||
    portraitName === weirdCapitals[4]
  ) {
    setPortraitName(portraitName[0] + portraitName.slice(1).toLowerCase());
  }

  const portraitURL = `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${portraitName}.png`;

  return (
    <div className="portrait">
      <img src={portraitURL} />
    </div>
  );
};
