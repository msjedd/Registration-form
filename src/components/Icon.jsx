import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Icon({ visible, onClick }) {
  // const onClick = function () {
  //   setIcon1(
  //     {icon=faEyeSlash? faEye : faEyeSlash}
  //   );
  // };
  return (
    <div>
      <FontAwesomeIcon
        icon={visible ? faEye : faEyeSlash}
        onClick={onClick}
        // className="icon"
      />
    </div>
  );
}
