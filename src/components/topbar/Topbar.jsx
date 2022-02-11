import React from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Myclikk</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.ibb.co/FwPnxHN/logo.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
