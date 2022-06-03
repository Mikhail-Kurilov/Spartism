import { useNavigate } from "react-router-dom";
import "./Cognitivism.css";
import backIcon from "../../assets/img/lambda2.png";
import mainSoundButton from "../../assets/sound/mousedown1.mp3";

function Cognitivism() {
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
        Ориентирование на экономику знаний. Культивирование ценности познания
        среди населения. Ужесточение отбора среди чиновников по принципу
        профессионализма, а не лояльности. Введение избирательного фильтра.
      </span>
    </div>
  );
}

export default Cognitivism;
