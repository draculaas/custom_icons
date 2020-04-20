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

const Back = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Back" viewBox="0 0 14 12" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Back</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M17.995,11 L8.415,11 L11.705,7.71 C11.885,7.53 11.995,7.28 11.995,7 C11.995,6.45 11.545,6 10.995,6 C10.715,6 10.465,6.11 10.285,6.29 L5.285,11.29 C5.105,11.48 4.995,11.73 4.995,12 C4.995,12.27 5.105,12.53 5.285,12.71 L10.285,17.71 C10.465,17.89 10.715,18 10.995,18 C11.545,18 11.995,17.55 11.995,17 C11.995,16.72 11.885,16.47 11.705,16.29 L8.415,13 L18.005,13 C18.555,13 19.005,12.55 19.005,12 C19.005,11.45 18.545,11 17.995,11 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2140.000000, -1917.000000)">
              <g id="Icons-/-Back" transform="translate(2135.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="arrow-left" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
