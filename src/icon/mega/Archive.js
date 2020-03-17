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

const Archive = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Archive" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.48 9L29.78 14.38L28.22 15.62L26 12.85V27H5.99997V12.85L3.77997 15.63L2.21997 14.38L6.51997 9H8.99997V5H23V9H25.48ZM20 14H12V16H20V14ZM11 7H21V9H11V7ZM7.99997 11V25H24V11H7.99997Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Archive.propTypes = propTypes;
Archive.defaultProps = defaultProps;

export default Archive;
