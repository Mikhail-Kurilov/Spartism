import React, { useState } from "react";
import "./MainPage.css";
import lambda from "../../assets/img/lambda.png";
import backgroundVideo from "../../assets/video/fond.mp4";
import mainSoundButton from "../../assets/sound/swishin.mp3";
import downloadSound from "../../assets/sound/wellDone.mp3";
import { Link, useNavigate } from "react-router-dom";

function MainPage() {
  const [videoUrl] = useState(backgroundVideo);
  const audioElem = new Audio(mainSoundButton);
  const downloadButton = new Audio(downloadSound);
  const navigate = useNavigate();

  function handleClick() {
    audioElem.play();
    navigate("/text");
  }

  function handleClickNav() {
    audioElem.play();
    navigate("/main/cognitivism");
  }

  function handleClickAsc() {
    audioElem.play();
    navigate("/main/ascetism");
  }

  function handleClickPro() {
    audioElem.play();
    navigate("/main/progressivism");
  }

  function handleClickLib() {
    audioElem.play();
    navigate("/main/liberalism");
  }

  function handleClickSec() {
    audioElem.play();
    navigate("/main/secularization");
  }

  function handleClickMon() {
    audioElem.play();
    navigate("/main/monoculturalism");
  }

  function downloadSoundHandler() {
    downloadButton.play();
  }

  return (
    <div className="mainPage">
      <div className="contentBox">
        <span className="description">
          Данная система принципов разработана опираясь на взгляды стоической
          школы. Также на автора данной конструкции повлияли идеи таких
          мыслителей как: Ф.Ницше, А.Шопенгауэра, М.Веллера, В.С.Соловьева,
          К.Занусси.
        </span>
        <div className="statementsLinks">
          <ul className="mainList">
            <li className="listItemWrapper">
              <button className="listItem" onClick={handleClickNav}>
                когнитивизм
              </button>
            </li>
            <li className="listItemWrapper">
              <button className="listItem" onClick={handleClickAsc}>
                аскетизм
              </button>
            </li>
            <li className="listItemWrapper">
              <button className="listItem" onClick={handleClickPro}>
                прогрессивизм
              </button>
            </li>
            <li className="listItemWrapper">
              <button className="listItem" onClick={handleClickLib}>
                либерализм
              </button>
            </li>
            <li className="listItemWrapper">
              <button className="listItem" onClick={handleClickSec}>
                секуляризация
              </button>
            </li>
            <li className="listItemWrapper">
              <button className="listItem" onClick={handleClickMon}>
                монокультурализм
              </button>
            </li>
          </ul>
          <form>
            <button className="reading" onClick={handleClick}>
              читать онлайн
            </button>
          </form>
          <div className="downloadContainer">
            <span className="download">скачать: </span>
            <div className="linkContainer">
              <Link
                to="/files/spartism.fb2"
                target="_blank"
                download
                className="link"
                onClick={downloadSoundHandler}
              >
                <img
                  src={lambda}
                  alt="logo"
                  className="logo"
                  width="32px"
                  height="32px"
                ></img>
                fb2
              </Link>
              <Link
                to="/files/spartism.pdf"
                target="_blank"
                download
                className="link"
                onClick={downloadSoundHandler}
              >
                <img
                  src={lambda}
                  alt="logo"
                  className="logo"
                  width="32px"
                  height="32px"
                ></img>
                pdf
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="videoWrapper">
        <video className="backgroundVideo" loop autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default MainPage;
