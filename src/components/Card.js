import React from "react";
import "../layouts/SwipeContainer.css";

const cardStyles = {
  background: "white",
  borderRadius: 5,
  position: "relative",
  backgroundColor: "#f5f7fa",
  backgroundImage: "linear-gradient(0deg,rgba(0, 0, 0, 0.5 transparent 30%)",
  boxShadow: "0 2px 10px 0 rgba(117,117,117,0.77)",
  width: "375px",
  height: "567px",
  maxHeight: "calc(100vh - 99px)",
  userSelect: "none",
  marginTop: "0px"
};
// from the js library - React Swipe and Spring Hooks

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
// This page is for styling --- CSS --- the card functionality is in the SwipeContainer
