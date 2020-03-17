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

const InProgress = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="InProgress" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M16 4C17.5759 4 19.1363 4.31039 20.5922 4.91345C22.0481 5.5165 23.371 6.40042 24.4853 7.51472C25.5996 8.62902 26.4835 9.95189 27.0866 11.4078C27.6896 12.8637 28 14.4241 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C5.26428 22.2348 4 19.1826 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4V4ZM16 6.4C13.4539 6.4 11.0121 7.41143 9.21178 9.21178C7.41143 11.0121 6.4 13.4539 6.4 16C6.4 18.5461 7.41143 20.9879 9.21178 22.7882C11.0121 24.5886 13.4539 25.6 16 25.6C18.5461 25.6 20.9879 24.5886 22.7882 22.7882C24.5886 20.9879 25.6 18.5461 25.6 16C25.6 13.4539 24.5886 11.0121 22.7882 9.21178C20.9879 7.41143 18.5461 6.4 16 6.4V6.4ZM21.88 10.12L16 16V7.6C18.28 7.6 20.44 8.56 21.88 10.12Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

InProgress.propTypes = propTypes;
InProgress.defaultProps = defaultProps;

export default InProgress;
