import { useNavigate } from "react-router-dom";

import backIcon from "../../assets/img/lambda2.png";
import mainSoundButton from "../../assets/sound/mousedown1.mp3";

function Progressivism() {
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
        Ориентирование на развитие и внедрение технологий. Простые и понятные
        всем законы. Будущее в приоритете над прошлым. Высокая социальная
        мобильность. Доминирование интеллектуального труда.
      </span>
    </div>
  );
}

export default Progressivism;
