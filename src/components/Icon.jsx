import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useVisible, useSetVisible } from "./VisibleContext";
// import { VisibleContext } from "./VisibleContext";

export default function Icon() {
  const visible = useVisible();
  const setVisible = useSetVisible();
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="icon-box">
      <span className="icon">
        <FontAwesomeIcon
          icon={visible ? faEye : faEyeSlash}
          onClick={handleClick}
        />
      </span>
    </div>
  );
}
