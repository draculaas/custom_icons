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

const Geotag = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Geotag" viewBox="0 0 12 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Geotag</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4 C8.96,4 6.49,6.39 6.49,9.33 C6.49,12.28 12,20 12,20 C12,20 17.51,12.28 17.51,9.33 C17.5,6.39 15.04,4 12,4 Z M12,12 C10.62,12 9.5,10.88 9.5,9.5 C9.5,8.12 10.62,7 12,7 C13.38,7 14.5,8.12 14.5,9.5 C14.5,10.88 13.38,12 12,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1941.000000, -1875.000000)">
              <g id="Icons-/-Geotag" transform="translate(1935.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="map-marker" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Geotag.propTypes = propTypes;
Geotag.defaultProps = defaultProps;

export default Geotag;
