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

const Device = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Device" viewBox="0 0 10 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Device</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M16,4 L8,4 C7.45,4 7,4.45 7,5 L7,19 C7,19.55 7.45,20 8,20 L16,20 C16.55,20 17,19.55 17,19 L17,5 C17,4.45 16.55,4 16,4 Z M12,19 C11.45,19 11,18.55 11,18 C11,17.45 11.45,17 12,17 C12.55,17 13,17.45 13,18 C13,18.55 12.55,19 12,19 Z M15,16 L9,16 L9,7 L15,7 L15,16 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2102.000000, -1955.000000)">
              <g id="Icons-/-Device" transform="translate(2095.000000, 1951.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="mobile-phone" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Device.propTypes = propTypes;
Device.defaultProps = defaultProps;

export default Device;
