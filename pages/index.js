import React, { Component, useState } from "react";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";

export default function Home() {
  var [playing, setPlaying] = useState(false);
  var handleOnReady = () => setTimeout(() => setPlaying(true), 10);
  return (
    <div className={styles.container}>
      <ReactPlayer
        onReady={handleOnReady}
        className="react-player"
        url="/video/prac.mp4"
        controls={false}
        playing={playing}
      />
    </div>
  );
}
