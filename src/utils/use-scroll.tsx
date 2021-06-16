import React, { useLayoutEffect, useState } from "react";

export const useScrollPosition = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updatePosition() {
      setSize([window.scrollX, window.scrollY]);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return size;
};
