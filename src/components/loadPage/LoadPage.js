import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadPage.css";
import greetingVideo from "../../assets/video/hello.mp4";

function LoadPage() {
  const navigate = useNavigate();
  const [videoUrl] = useState(greetingVideo);

  function handleClick() {
    navigate("/main");
  }

  setTimeout(handleClick, 5000);

  return (
    <div className="loadPageBox" onClick={handleClick}>
      <div className="videoPageWrapper">
        <video className="backgroundLoadedVideo" loop autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LoadPage;
