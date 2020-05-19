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
        <Icon title="Archive" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Archive">
            <path
              id="compressed"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.93 9.61V9.63C19.97 9.74 20 9.87 20 10V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V10C4 9.87 4.03 9.74 4.07 9.63L4.08 9.61L6.07 4.63C6.22 4.26 6.58 4 7 4H17C17.42 4 17.78 4.26 17.94 4.63L19.93 9.61ZM16.32 6H13V9H17.52L16.32 6ZM7.68 6H11V9H6.48L7.68 6ZM6 11V18H18V11H13V13.59L14.29 12.29C14.47 12.11 14.72 12 15 12C15.55 12 16 12.45 16 13C16 13.28 15.89 13.53 15.71 13.71L12.71 16.71C12.53 16.89 12.28 17 12 17C11.72 17 11.47 16.89 11.29 16.71L8.29 13.71C8.11 13.53 8 13.28 8 13C8 12.45 8.45 12 9 12C9.28 12 9.53 12.11 9.71 12.29L11 13.59V11H6Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Archive.propTypes = propTypes;
Archive.defaultProps = defaultProps;

export default Archive;
