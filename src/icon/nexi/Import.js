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

const Import = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Import" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Import</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M8,10 C8.28,10 8.53,9.89 8.71,9.71 L11,7.41 L11,15 C11,15.55 11.45,16 12,16 C12.55,16 13,15.55 13,15 L13,7.41 L15.29,9.7 C15.47,9.89 15.72,10 16,10 C16.55,10 17,9.55 17,9 C17,8.72 16.89,8.47 16.71,8.29 L12.71,4.29 C12.53,4.11 12.28,4 12,4 C11.72,4 11.47,4.11 11.29,4.29 L7.29,8.29 C7.11,8.47 7,8.72 7,9 C7,9.55 7.45,10 8,10 Z M19,15 C18.45,15 18,15.45 18,16 L18,18 L6,18 L6,16 C6,15.45 5.55,15 5,15 C4.45,15 4,15.45 4,16 L4,19 C4,19.55 4.45,20 5,20 L19,20 C19.55,20 20,19.55 20,19 L20,16 C20,15.45 19.55,15 19,15 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2219.000000, -1835.000000)">
              <g id="Icons-/-Import" transform="translate(2215.000000, 1831.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="export" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Import.propTypes = propTypes;
Import.defaultProps = defaultProps;

export default Import;
