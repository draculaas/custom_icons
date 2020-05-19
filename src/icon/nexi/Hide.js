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

const Hide = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Hide" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Hide">
            <path
              id="eye-off"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.57 7.8C19.82 7.62 20 7.34 20 7C20 6.45 19.55 6 19 6C18.78 6 18.59 6.08 18.43 6.2L18.42 6.19L15.75 8.1C15.06 7.72 14.34 7.41 13.58 7.23C12.62 7 11.64 6.99 10.67 7.18C9.79 7.36 8.93 7.72 8.14 8.17C6.89 8.87 5.75 9.84 4.76 10.92L4.74258 10.9394C4.56779 11.1335 4.38485 11.3368 4.23 11.54C4 11.83 4 12.17 4.22 12.46C4.73 13.12 5.33 13.71 5.95 14.25C6.05126 14.34 6.15885 14.4205 6.26565 14.5004L6.26566 14.5005C6.3487 14.5626 6.43126 14.6244 6.51 14.69L4.42 16.19L4.43 16.2C4.18 16.38 4 16.66 4 17C4 17.55 4.45 18 5 18C5.22 18 5.41 17.92 5.57 17.8L5.58 17.81L19.58 7.81L19.57 7.8ZM20 11.97V11.95V11.94V11.92V11.9C19.98 11.76 19.92 11.64 19.83 11.54C19.34 10.91 18.76 10.34 18.18 9.82L15.02 12.08C14.98 13.69 13.66 14.98 12.04 14.98C11.73 14.98 11.44 14.92 11.16 14.83L9.09 16.3C9.53 16.49 9.99 16.66 10.46 16.77C11.43 17 12.4 17.01 13.38 16.82C14.26 16.65 15.12 16.28 15.91 15.84C17.16 15.14 18.3 14.17 19.29 13.09L19.3074 13.0707L19.3074 13.0706C19.4822 12.8765 19.6652 12.6732 19.82 12.47C19.91 12.37 19.97 12.25 19.99 12.11V12.09V12.07V12.06V12.04V12.01C20 11.99 20 11.98 20 11.97ZM9.05 12C9.05 12.28 9.09 12.54 9.16 12.8L13.7 9.55C13.23 9.23 12.66 9.02 12.04 9.02C10.39 9.02 9.05 10.36 9.05 12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Hide.propTypes = propTypes;
Hide.defaultProps = defaultProps;

export default Hide;
