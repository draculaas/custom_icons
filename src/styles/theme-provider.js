import React from 'react';
import { NexiTheme } from '../theme';

export const ThemeContext = React.createContext(NexiTheme);

const ThemeProvider = props => {
  const { theme, children } = props;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
