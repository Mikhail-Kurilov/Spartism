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
            <li className="listItem">когнитивизм</li>
            <li className="listItem">аскетизм</li>
            <li className="listItem">прогрессивизм</li>
            <li className="listItem">либерализм</li>
            <li className="listItem">секуляризация</li>
            <li className="listItem">монокультурализм</li>
          </ul>
          <form>
            <button className="reading" onClick={handleClick}>
              читать онлайн
            </button>
          </form>
          <span className="download">
            скачать:{" "}
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
          </span>
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
