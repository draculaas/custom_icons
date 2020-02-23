import * as React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { initializeRTL } from 'storybook-addon-rtl';
import { ThemeProvider, theme } from '../src/index';

initializeRTL();

addDecorator(story => {
  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
});

addParameters({ options: { showAddonPanel: false } });

configure(() => require('./load-stories.js'), module);
