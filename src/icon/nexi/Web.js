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

const Web = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Web" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Web</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M19,4 L5,4 C4.45,4 4,4.45 4,5 L4,15 C4,15.55 4.45,16 5,16 L9.75,16 L9.25,18 L8,18 C7.45,18 7,18.45 7,19 C7,19.55 7.45,20 8,20 L16,20 C16.55,20 17,19.55 17,19 C17,18.45 16.55,18 16,18 L14.75,18 L14.25,16 L19,16 C19.55,16 20,15.55 20,15 L20,5 C20,4.45 19.55,4 19,4 Z M18,14 L6,14 L6,6 L18,6 L18,14 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2059.000000, -1915.000000)">
              <g id="Icons-/-Web" transform="translate(2055.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="desktop" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Web.propTypes = propTypes;
Web.defaultProps = defaultProps;

export default Web;
