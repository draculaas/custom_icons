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

const ArrowRight = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowRight" viewBox="0 0 6 8" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Arrow Right</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M14.5,12 C14.5,11.85 14.43,11.72 14.33,11.63 L10.33,8.13 C10.24,8.05 10.13,8 10,8 C9.72,8 9.5,8.22 9.5,8.5 L9.5,15.5 C9.5,15.78 9.72,16 10,16 C10.13,16 10.24,15.95 10.33,15.87 L14.33,12.37 C14.43,12.28 14.5,12.15 14.5,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1944.000000, -1839.000000)">
              <g id="Icons-/-Arrow-Right" transform="translate(1935.000000, 1831.000000)">
                <rect id="Rectangle-Copy-2" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="caret-right" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowRight.propTypes = propTypes;
ArrowRight.defaultProps = defaultProps;

export default ArrowRight;
