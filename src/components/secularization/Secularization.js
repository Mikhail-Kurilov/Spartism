import { useNavigate } from "react-router-dom";

import backIcon from "../../assets/img/lambda2.png";
import mainSoundButton from "../../assets/sound/mousedown1.mp3";

function Secularization() {
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
        Ориентирование на светское государство. Церкви выделяется роль
        морально-этического института. Отсутствие возможности религиозных
        институтов влиять на принятие государственных решений. Независимость
        церкви от действий государства.
      </span>
    </div>
  );
}

export default Secularization;
