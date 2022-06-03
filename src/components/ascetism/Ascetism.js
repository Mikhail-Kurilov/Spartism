import { useNavigate } from "react-router-dom";

import backIcon from "../../assets/img/lambda2.png";
import mainSoundButton from "../../assets/sound/mousedown1.mp3";

function Ascetism() {
  const navigate = useNavigate();
  const audioElem = new Audio(mainSoundButton);

  function handleClick() {
    audioElem.play();
    navigate(-1);
  }
  return (
    <div className="meaning">
      <button className="backButton backButtonMargin" onClick={handleClick}>
        <img
          src={backIcon}
          alt="logo"
          className="arrowLogo"
          width="35px"
          height="35px"
        ></img>
      </button>
      <span className="meaningTxt">
        Ориентирование на умереннось. Экономия ресурсов, порицание чрезмерного
        потребления. Концентрация не на физических целях, но на духовных и
        интеллектуальных.
      </span>
    </div>
  );
}

export default Ascetism;
