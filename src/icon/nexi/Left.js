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

const Left = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Left" viewBox="0 0 6 10" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Left</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M11.41,12 L14.7,8.71 C14.89,8.53 15,8.28 15,8 C15,7.45 14.55,7 14,7 C13.72,7 13.47,7.11 13.29,7.29 L9.29,11.29 C9.11,11.47 9,11.72 9,12 C9,12.28 9.11,12.53 9.29,12.71 L13.29,16.71 C13.47,16.89 13.72,17 14,17 C14.55,17 15,16.55 15,16 C15,15.72 14.89,15.47 14.71,15.29 L11.41,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2064.000000, -1838.000000)">
              <g id="Icons-/-Left" transform="translate(2055.000000, 1831.000000)">
                <rect id="Rectangle-Copy-5" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="chevron-left" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Left.propTypes = propTypes;
Left.defaultProps = defaultProps;

export default Left;
