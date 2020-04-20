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

const Suppport = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Suppport" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Suppport</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4 C7.58,4 4,7.58 4,12 C4,16.42 7.58,20 12,20 C16.42,20 20,16.42 20,12 C20,7.58 16.42,4 12,4 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M14.93,10.48 C14.79,10.8 14.58,11.12 14.31,11.45 L13.25,12.83 C13.13,12.98 13.01,13.12 12.97,13.25 C12.93,13.38 12.88,13.55 12.88,13.77 L12.88,14 L11.12,14 L11.12,12.88 C11.12,12.88 11.17,12.37 11.33,12.17 L12.4,10.73 C12.62,10.47 12.75,10.24 12.84,10.05 C12.93,9.86 12.96,9.67 12.96,9.47 C12.96,9.17 12.86,8.92 12.68,8.72 C12.5,8.53 12.24,8.44 11.92,8.44 C11.59,8.44 11.33,8.54 11.14,8.73 C10.95,8.92 10.81,9.19 10.74,9.54 C10.71,9.65 10.64,9.69 10.54,9.68 L8.84,9.43 C8.72,9.42 8.68,9.35 8.7,9.24 C8.82,8.42 9.16,7.77 9.73,7.3 C10.3,6.82 11.05,6.58 11.98,6.58 C12.45,6.58 12.88,6.65 13.27,6.8 C13.66,6.95 13.99,7.14 14.27,7.39 C14.55,7.64 14.76,7.94 14.92,8.28 C15.07,8.63 15.14,9 15.14,9.4 C15.14,9.8 15.07,10.15 14.93,10.48 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1979.000000, -1915.000000)">
              <g id="Icons-/-Suppport" transform="translate(1975.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="help" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Suppport.propTypes = propTypes;
Suppport.defaultProps = defaultProps;

export default Suppport;
