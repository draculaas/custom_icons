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

const ArrowLeft = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowLeft" viewBox="0 0 6 8" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Arrow Left</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M14,8 C13.87,8 13.76,8.05 13.67,8.13 L9.67,11.63 C9.57,11.72 9.5,11.85 9.5,12 C9.5,12.15 9.57,12.28 9.67,12.37 L13.67,15.87 C13.76,15.95 13.87,16 14,16 C14.28,16 14.5,15.78 14.5,15.5 L14.5,8.5 C14.5,8.22 14.28,8 14,8 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1904.000000, -1839.000000)">
              <g id="Icons-/-Arrow-Left" transform="translate(1895.000000, 1831.000000)">
                <rect id="Rectangle-Copy" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="caret-left" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowLeft.propTypes = propTypes;
ArrowLeft.defaultProps = defaultProps;

export default ArrowLeft;
