import React from "react";
import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const preveTtile = document.title;
    document.title = title;

    return () => (document.title = preveTtile);
  }, title);
};

export default useTitle;
