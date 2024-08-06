import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Icon() {
  //   const [icon, setIcon] = useState(faEyeSlash);

  return (
    <div>
      <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
    </div>
  );
}
