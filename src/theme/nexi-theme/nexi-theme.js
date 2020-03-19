import { nexiThemeColors } from './colors';
import getTypography from '../shared/typography.js';

export const NexiTheme = {
  name: 'nexi-theme',
  colors: { ...nexiThemeColors },
  direction: 'auto',
  buttonRadius: '32px',
  typography: getTypography(),
};
