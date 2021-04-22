import React, { Component, useState } from "react";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";

export default function Home() {
  const mtlinks = [
    "https://cornell.ca1.qualtrics.com/jfe/form/SV_2gB4OTc24so95SC",
    "https://cornell.ca1.qualtrics.com/jfe/form/SV_6r1ZnzT4Cubpt3M",
    "https://cornell.ca1.qualtrics.com/jfe/form/SV_9H3PLkC3pth7YWi",
  ];
  const idx = Math.floor(Math.random() * mtlinks.length);
  const url = mtlinks[idx];
  console.log(idx, url);
  return (
    <div className={styles.container}>
      <h1>
        Click the link below to open up the experiment (Qualtrics survey).
      </h1>
      <a href={url} style={{ color: "blue", fontSize: "20px" }}>
        <u> proceed to the experiment</u>
      </a>
    </div>
  );
}
