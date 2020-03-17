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

const Geotag = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Geotag" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3842 28L7.77416 16.83C7.22719 15.6931 6.96303 14.4409 7.00416 13.18C6.95975 8.16186 10.9861 4.05495 16.0042 4C21.0222 4.05495 25.0486 8.16186 25.0042 13.18C25.0072 14.4383 24.7413 15.6828 24.2242 16.83L18.6142 28H13.3842ZM23.0042 13.18C23.0001 9.28599 19.8968 6.1029 16.0042 6C12.1115 6.1029 9.00822 9.28599 9.00416 13.18C8.97544 14.1159 9.16011 15.0461 9.54416 15.9L14.6242 26H17.3842L22.4442 15.94C22.8178 15.068 23.0084 14.1286 23.0042 13.18ZM16.0042 17C18.2133 17 20.0042 15.2091 20.0042 13C20.0042 10.7909 18.2133 9 16.0042 9C13.795 9 12.0042 10.7909 12.0042 13C12.0042 15.2091 13.795 17 16.0042 17ZM18.0042 13C18.0042 11.8954 17.1087 11 16.0042 11C14.8996 11 14.0042 11.8954 14.0042 13C14.0042 14.1046 14.8996 15 16.0042 15C17.1087 15 18.0042 14.1046 18.0042 13Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Geotag.propTypes = propTypes;
Geotag.defaultProps = defaultProps;

export default Geotag;
