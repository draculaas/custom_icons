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

const Lock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Lock" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10V12H24V20C24 24.4183 20.4183 28 16 28C11.5817 28 8 24.4183 8 20V12H10V10ZM15 23V20.72C14.2161 20.2674 13.8339 19.3447 14.0681 18.4703C14.3024 17.5959 15.0948 16.9879 16 16.9879C16.9052 16.9879 17.6976 17.5959 17.9319 18.4703C18.1661 19.3447 17.7839 20.2674 17 20.72V23H15ZM12 10C12 7.79086 13.7909 6 16 6C18.2091 6 20 7.79086 20 10V12H12V10ZM16 26C19.3137 26 22 23.3137 22 20V14H10V20C10 23.3137 12.6863 26 16 26Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

export default Lock;
