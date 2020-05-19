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
        <Icon title="Device" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Device">
            <path
              id="mobile-phone"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 4H8C7.45 4 7 4.45 7 5V19C7 19.55 7.45 20 8 20H16C16.55 20 17 19.55 17 19V5C17 4.45 16.55 4 16 4ZM12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19ZM9 16H15V7H9V16Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Device.propTypes = propTypes;
Device.defaultProps = defaultProps;

export default Device;
