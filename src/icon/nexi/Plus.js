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

const Plus = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Plus" viewBox="0 0 12 12" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Plus</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M17,11 L13,11 L13,7 C13,6.45 12.55,6 12,6 C11.45,6 11,6.45 11,7 L11,11 L7,11 C6.45,11 6,11.45 6,12 C6,12.55 6.45,13 7,13 L11,13 L11,17 C11,17.55 11.45,18 12,18 C12.55,18 13,17.55 13,17 L13,13 L17,13 C17.55,13 18,12.55 18,12 C18,11.45 17.55,11 17,11 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2021.000000, -1797.000000)">
              <g id="Icons-/-Plus" transform="translate(2015.000000, 1791.000000)">
                <rect id="Rectangle-Copy-3" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="plus" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Plus.propTypes = propTypes;
Plus.defaultProps = defaultProps;

export default Plus;
