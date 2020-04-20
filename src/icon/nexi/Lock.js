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

const Lock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Lock" viewBox="0 0 14 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Lock</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M17.96,11 L16,11 L16,7.95 C16,5.77 14.21,4 12,4 C9.79,4 8,5.77 8,7.95 L8,11 L5.96,11 C5.41,11 5,11.35 5,11.9 L5,18.81 C5,19.35 5.41,20 5.96,20 L17.96,20 C18.51,20 19,19.35 19,18.81 L19,11.9 C19,11.35 18.51,11 17.96,11 Z M10,11 L10,7.95 C10,6.86 10.9,5.98 12,5.98 C13.1,5.98 14,6.86 14,7.95 L14,11 L10,11 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1900.000000, -1875.000000)">
              <g id="Icons-/-Lock" transform="translate(1895.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="lock" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

export default Lock;
