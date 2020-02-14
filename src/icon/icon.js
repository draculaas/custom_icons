import * as React from 'react';
import PropTypes from 'prop-types';

import StyledSvg from './styled-svg';
import { KIND } from '../constants';

const propTypes = {
  title: PropTypes.string,
  kind: PropTypes.oneOf([KIND.primary, KIND.tertiary, KIND.minimal, KIND.fourth, KIND.third, KIND.secondary, KIND.none]),
};

const Icon = ({ children, title, ...restProps }) => (
  <StyledSvg {...restProps}>
    {title ? <title>{title}</title> : null}
    {children}
  </StyledSvg>
);

export default Icon;
