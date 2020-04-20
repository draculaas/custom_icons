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

const Up = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Up" viewBox="0 0 10 6" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Up</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M16.71,13.29 L12.71,9.29 C12.53,9.11 12.28,9 12,9 C11.72,9 11.47,9.11 11.29,9.29 L7.29,13.29 C7.11,13.47 7,13.72 7,14 C7,14.55 7.45,15 8,15 C8.28,15 8.53,14.89 8.71,14.71 L12,11.41 L15.29,14.7 C15.47,14.89 15.72,15 16,15 C16.55,15 17,14.55 17,14 C17,13.72 16.89,13.47 16.71,13.29 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2142.000000, -1840.000000)">
              <g id="Icons-/-Up" transform="translate(2135.000000, 1831.000000)">
                <rect id="Rectangle-Copy-2" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="chevron-up" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Up.propTypes = propTypes;
Up.defaultProps = defaultProps;

export default Up;
