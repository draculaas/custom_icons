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

const Ring = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Ring" viewBox="0 0 14 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Ring</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,20 C13.1,20 14,19.1 14,18 L10,18 C10,19.1 10.9,20 12,20 Z M18,15 C17.45,15 17,14.55 17,14 L17,10 C17,7.57 15.27,5.55 12.98,5.1 C12.98,5.06 13,5.04 13,5 C13,4.45 12.55,4 12,4 C11.45,4 11,4.45 11,5 C11,5.04 11.02,5.06 11.02,5.1 C8.73,5.55 7,7.57 7,10 L7,14 C7,14.55 6.55,15 6,15 C5.45,15 5,15.45 5,16 C5,16.55 5.45,17 6,17 L18,17 C18.55,17 19,16.55 19,16 C19,15.45 18.55,15 18,15 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2220.000000, -1795.000000)">
              <g id="Icons-/-Ring" transform="translate(2215.000000, 1791.000000)">
                <rect id="Rectangle-Copy-5" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="notifications" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Ring.propTypes = propTypes;
Ring.defaultProps = defaultProps;

export default Ring;
