import { useEffect, useState } from "react";

const useSystemThemeDetector = () => {
  //define current system theme detector function
  const getCurrentColorScheme = () =>
    window.matchMedia("(prefers-color-scheme : dark)").matches;
  const [isDark, setIsDark] = useState(getCurrentColorScheme());
  // update callback for isDark if system theme chamges
  const isDarkUpdate = (e) => {
    setIsDark(e.matches);
  };

  //update isDark value if the system's preferred color scheme changes using an event listener on matchMedia method of window
  useEffect(() => {
    //define matchMedia for dark color scheme
    const darkColorSchemeMq = window.matchMedia(
      "(prefers-color-scheme : dark)"
    );
    darkColorSchemeMq.addEventListener("change", isDarkUpdate);
    return () => {
      darkColorSchemeMq.removeEventListener("change", isDarkUpdate);
    };
  });

  return isDark ? "Dark" : "Light";
};

export default useSystemThemeDetector;
