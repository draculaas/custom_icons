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
        <Icon title="Hide" viewBox="0 0 16 12" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Hide</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M20,11.97 L20,11.95 L20,11.94 L20,11.92 L20,11.9 C19.98,11.76 19.92,11.64 19.83,11.54 C19.34,10.91 18.76,10.34 18.18,9.82 L15.02,12.08 C14.98,13.69 13.66,14.98 12.04,14.98 C11.73,14.98 11.44,14.92 11.16,14.83 L9.09,16.3 C9.53,16.49 9.99,16.66 10.46,16.77 C11.43,17 12.4,17.01 13.38,16.82 C14.26,16.65 15.12,16.28 15.91,15.84 C17.16,15.14 18.3,14.17 19.29,13.09 C19.47,12.89 19.66,12.68 19.82,12.47 C19.91,12.37 19.97,12.25 19.99,12.11 L19.99,12.09 L19.99,12.07 L19.99,12.06 L19.99,12.04 L19.99,12.01 C20,11.99 20,11.98 20,11.97 L20,11.97 Z M19.57,7.8 C19.82,7.62 20,7.34 20,7 C20,6.45 19.55,6 19,6 C18.78,6 18.59,6.08 18.43,6.2 L18.42,6.19 L15.75,8.1 C15.06,7.72 14.34,7.41 13.58,7.23 C12.62,7 11.64,6.99 10.67,7.18 C9.79,7.36 8.93,7.72 8.14,8.17 C6.89,8.87 5.75,9.84 4.76,10.92 C4.58,11.12 4.39,11.33 4.23,11.54 C4,11.83 4,12.17 4.22,12.46 C4.73,13.12 5.33,13.71 5.95,14.25 C6.13,14.41 6.33,14.54 6.51,14.69 L4.42,16.19 L4.43,16.2 C4.18,16.38 4,16.66 4,17 C4,17.55 4.45,18 5,18 C5.22,18 5.41,17.92 5.57,17.8 L5.58,17.81 L19.58,7.81 L19.57,7.8 Z M9.16,12.8 C9.09,12.54 9.05,12.28 9.05,12 C9.05,10.36 10.39,9.02 12.04,9.02 C12.66,9.02 13.23,9.23 13.7,9.55 L9.16,12.8 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2099.000000, -1877.000000)">
              <g id="Icons-/-Hide" transform="translate(2095.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="eye-off" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Hide.propTypes = propTypes;
Hide.defaultProps = defaultProps;

export default Hide;
