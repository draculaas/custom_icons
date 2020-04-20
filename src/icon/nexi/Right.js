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

const Right = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Right" viewBox="0 0 6 10" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Right</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M14.71,11.29 L10.71,7.29 C10.53,7.11 10.28,7 10,7 C9.45,7 9,7.45 9,8 C9,8.28 9.11,8.53 9.29,8.71 L12.59,12 L9.3,15.29 C9.11,15.47 9,15.72 9,16 C9,16.55 9.45,17 10,17 C10.28,17 10.53,16.89 10.71,16.71 L14.71,12.71 C14.89,12.53 15,12.28 15,12 C15,11.72 14.89,11.47 14.71,11.29 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2104.000000, -1838.000000)">
              <g id="Icons-/-Right" transform="translate(2095.000000, 1831.000000)">
                <rect id="Rectangle-Copy-6" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="chevron-right" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Right.propTypes = propTypes;
Right.defaultProps = defaultProps;

export default Right;
