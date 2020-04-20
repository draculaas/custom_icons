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

const ArrowUp = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowUp" viewBox="0 0 8 6" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Arrow Up</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M15.87,13.67 C15.87,13.67 15.88,13.67 15.87,13.67 L12.37,9.67 C12.28,9.57 12.15,9.5 12,9.5 C11.85,9.5 11.72,9.57 11.63,9.67 L8.13,13.67 C8.05,13.76 8,13.87 8,14 C8,14.28 8.22,14.5 8.5,14.5 L15.5,14.5 C15.78,14.5 16,14.28 16,14 C16,13.87 15.95,13.76 15.87,13.67 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1983.000000, -1840.000000)">
              <g id="Icons-/-Arrow-Up" transform="translate(1975.000000, 1831.000000)">
                <rect id="Rectangle-Copy-3" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="caret-up" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowUp.propTypes = propTypes;
ArrowUp.defaultProps = defaultProps;

export default ArrowUp;
