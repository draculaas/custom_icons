import * as React from "react";

export const ThemeContext = React.createContext({});

const ThemeProvider = (props) => {
  const { theme, children } = props;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
