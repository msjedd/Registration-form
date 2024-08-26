import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Icon({ visible, onClick }) {
  return (
    <div className="icon-box">
      <span className="icon">
        <FontAwesomeIcon
          icon={visible ? faEye : faEyeSlash}
          onClick={onClick}
        />
      </span>
    </div>
  );
}
