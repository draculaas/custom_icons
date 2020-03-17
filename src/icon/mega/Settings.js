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

const Settings = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Settings" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 22.94L9.06 26L12.29 25L13.81 28H18.19L19.71 25L22.94 26L26.04 22.9L25 19.71L28 18.19V13.81L25 12.29L26 9.06L22.94 6L19.71 7L18.19 4H13.81L12.29 7L9.06 6L6 9.06L7 12.29L4 13.81V18.19L7 19.71L6 22.94ZM20.5 16C20.5 18.4853 18.4853 20.5 16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5C18.4853 11.5 20.5 13.5147 20.5 16ZM18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16ZM6 15V16.94L8.88 18.42L9.25 19.3L8.25 22.4L9.56 23.71L12.66 22.71L13.54 23.07L15 26H17L18.42 23.11L19.3 22.75L22.4 23.75L23.71 22.44L22.71 19.34L23.08 18.46L26 17V15L23.12 13.58L22.75 12.7L23.75 9.6L22.44 8.29L19.34 9.29L18.46 8.93L17 6H15L13.58 8.89L12.7 9.25L9.6 8.25L8.29 9.56L9.29 12.66L8.92 13.54L6 15Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

export default Settings;
