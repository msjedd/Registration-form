import React, { createContext, useContext, useState } from "react";
const VisibleContext = createContext();
const SetVisbleContext = createContext();
export const useVisible = () => {
  return useContext(VisibleContext);
};

export const useSetVisible = () => {
  return useContext(SetVisbleContext);
};

export function VisibleProvider({ children }) {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible((prevVisible) => !prevVisible);
  }
  return (
    <VisibleContext.Provider value={visible}>
      <SetVisbleContext.Provider value={handleClick}>
        {children}
      </SetVisbleContext.Provider>
    </VisibleContext.Provider>
  );
}
