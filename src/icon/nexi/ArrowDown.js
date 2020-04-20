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

const ArrowDown = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowDown" viewBox="0 0 8 6" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Arrow Down</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M16,10 C16,9.72 15.78,9.5 15.5,9.5 L8.5,9.5 C8.22,9.5 8,9.72 8,10 C8,10.13 8.05,10.24 8.13,10.33 L11.63,14.33 C11.72,14.43 11.85,14.5 12,14.5 C12.15,14.5 12.28,14.43 12.37,14.33 L15.87,10.33 C15.95,10.24 16,10.13 16,10 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1863.000000, -1840.000000)">
              <g id="Icons-/-Arrow-Down" transform="translate(1855.000000, 1831.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="caret-down" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowDown.propTypes = propTypes;
ArrowDown.defaultProps = defaultProps;

export default ArrowDown;
