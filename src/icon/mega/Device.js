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

const Device = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Device" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4H24V28H8V4ZM10 6V26H22V6H10ZM13 8H19V10H13V8ZM17.5 23C17.5 23.8284 16.8284 24.5 16 24.5C15.1716 24.5 14.5 23.8284 14.5 23C14.5 22.1716 15.1716 21.5 16 21.5C16.8284 21.5 17.5 22.1716 17.5 23Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Device.propTypes = propTypes;
Device.defaultProps = defaultProps;

export default Device;
