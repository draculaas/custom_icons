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

const Log = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Log" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 4V17C24.9475 17.2512 27.1707 19.7851 27.0364 22.7403C26.902 25.6954 24.4582 28.0172 21.5 28H21H5V4H22ZM16 9H9V11H16V9ZM17 13H9V15H17V13ZM9 17H13V19H9V17ZM7 6H20V17.2C18.2071 17.7015 16.7906 19.0774 16.2371 20.8549C15.6837 22.6325 16.0687 24.5693 17.26 26H7V6ZM18 22.5C18 24.433 19.567 26 21.5 26C22.4317 26 23.325 25.6285 23.982 24.9678C24.6389 24.3071 25.0053 23.4117 25 22.48C24.9947 22.1015 24.9271 21.7265 24.8 21.37L22.34 24H20.58L19.25 22.53L20.74 21.19L21.47 22L23.61 19.73C23.0063 19.2609 22.2645 19.0042 21.5 19C19.567 19 18 20.567 18 22.5Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Log.propTypes = propTypes;
Log.defaultProps = defaultProps;

export default Log;
