import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { ThemeContext } from '../../styles/theme-provider';
import { ICON_SIZES } from '../../constants';

const propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  kind: PropTypes.string,
};

const defaultProps = {
  size: 'medium',
};

const ErrorSmall = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ErrorSmall" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M16 24C11.59 24 8 20.41 8 16C8 11.59 11.59 8 16 8C20.41 8 24 11.59 24 16C24 20.41 20.41 24 16 24ZM16 6C10.47 6 6 10.47 6 16C6 21.53 10.47 26 16 26C21.53 26 26 21.53 26 16C26 10.47 21.53 6 16 6ZM18.59 12L16 14.59L13.41 12L12 13.41L14.59 16L12 18.59L13.41 20L16 17.41L18.59 20L20 18.59L17.41 16L20 13.41L18.59 12Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ErrorSmall.propTypes = propTypes;
ErrorSmall.defaultProps = defaultProps;

export default ErrorSmall;
