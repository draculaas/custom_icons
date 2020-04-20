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

const File = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="File" viewBox="0 0 12 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / File</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M13,4 L7,4 C6.45,4 6,4.45 6,5 L6,19 C6,19.55 6.45,20 7,20 L17,20 C17.55,20 18,19.55 18,19 L18,9 L13,4 Z M16,18 L8,18 L8,6 L12,6 L12,10 L16,10 L16,18 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2141.000000, -1955.000000)">
              <g id="Icons-/-File" transform="translate(2135.000000, 1951.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="document" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;
