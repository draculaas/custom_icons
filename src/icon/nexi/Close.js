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

const Close = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Close" viewBox="0 0 10 10" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Close</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M13.41,12 L16.7,8.71 C16.89,8.53 17,8.28 17,8 C17,7.45 16.55,7 16,7 C15.72,7 15.47,7.11 15.29,7.29 L12,10.59 L8.71,7.29 C8.53,7.11 8.28,7 8,7 C7.45,7 7,7.45 7,8 C7,8.28 7.11,8.53 7.29,8.71 L10.59,12 L7.3,15.29 C7.11,15.47 7,15.72 7,16 C7,16.55 7.45,17 8,17 C8.28,17 8.53,16.89 8.71,16.71 L12,13.41 L15.29,16.7 C15.47,16.89 15.72,17 16,17 C16.55,17 17,16.55 17,16 C17,15.72 16.89,15.47 16.71,15.29 L13.41,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2062.000000, -1798.000000)">
              <g id="Icons-/-Close" transform="translate(2055.000000, 1791.000000)">
                <rect id="Rectangle-Copy-4" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="cross" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
