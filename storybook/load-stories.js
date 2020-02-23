import React from 'react';
import { storiesOf } from '@storybook/react';

import scenarios from '../src/**/*.scenario.js';

const light = storiesOf('nexign-ui', module);

scenarios.forEach(scenario => {
  const Component = scenario.result.default;
  const fileName = scenario.fileName.split('/').pop();
  const [scenarioName] = fileName.split('.scenario.js');

  light.add(scenarioName, () => <Component />);
});
