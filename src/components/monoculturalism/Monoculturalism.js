import { useNavigate } from "react-router-dom";

import backIcon from "../../assets/img/lambda2.png";
import mainSoundButton from "../../assets/sound/mousedown1.mp3";

function Monoculturalism() {
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
        Ориентирование на доминирование основной культурной группы. Смешение
        народностей. Формирование чувства патриотизма на основе гражданской, а
        не этнической принадлежности к государству.
      </span>
    </div>
  );
}

export default Monoculturalism;
