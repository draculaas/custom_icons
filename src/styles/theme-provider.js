import React from 'react';
import theme from '../theme/theme';

export const ThemeContext = React.createContext(theme);

const ThemeProvider = props => {
  const { theme, children } = props;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
