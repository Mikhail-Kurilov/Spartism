import { useState, useEffect } from "react";

import "./Header.css";
import raven from "../../assets/img/raven.png";
import soundOn from "../../assets/img/volume.png";
import soundOff from "../../assets/img/mute-speaker.png";
import soundButton from "../../assets/sound/button.mp3";
import soundElem1 from "../../assets/sound/p1.mp3";
import soundElem2 from "../../assets/sound/p2.mp3";
import soundElem3 from "../../assets/sound/t1.mp3";
import soundElem4 from "../../assets/sound/t2.mp3";
import soundElem5 from "../../assets/sound/t3.mp3";
import soundElem6 from "../../assets/sound/t5.mp3";
import soundElem7 from "../../assets/sound/z1.mp3";
import soundElem8 from "../../assets/sound/z3.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);

  const soundArr = [
    soundElem1,
    soundElem2,
    soundElem3,
    soundElem4,
    soundElem5,
    soundElem6,
    soundElem7,
    soundElem8,
  ];

  const toggle = () => {
    audio.src = soundArr[Math.floor(Math.random() * soundArr.length)];
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  });

  /*useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });*/

  return [playing, toggle];
};

function Header() {
  const [playing, toggle] = useAudio(soundElem1);
  const [audioPicture, setAudioPicture] = useState(soundOff);

  function audioSwitcher() {
    toggle();
    setAudioPicture(playing ? soundOff : soundOn);
    document.getElementById("audioButton").play();
  }

  return (
    <div className="header">
      <div className="headerContent">
        <div className="uniteImgH1">
          <img
            src={raven}
            alt="logo"
            className="mainLogo"
            width="150px"
            height="150px"
          ></img>
          <h1 className="heading">СПАРТИЗМ</h1>
        </div>
        <div className="buttonWrapper">
          <button className="soundSwitcher" onClick={audioSwitcher}>
            <img
              src={audioPicture}
              className="soundImg"
              width="30px"
              height="30px"
              alt="on/off"
            ></img>
          </button>
        </div>
      </div>
      <audio id="audioButton">
        <source id="mp3Source" type="audio/mp3" src={soundButton} />
      </audio>
    </div>
  );
}

export default Header;
