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

const Archive = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Archive" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Archive</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M19.93,9.63 L19.93,9.61 L17.94,4.63 C17.78,4.26 17.42,4 17,4 L7,4 C6.58,4 6.22,4.26 6.07,4.63 L4.08,9.61 L4.07,9.63 C4.03,9.74 4,9.87 4,10 L4,19 C4,19.55 4.45,20 5,20 L19,20 C19.55,20 20,19.55 20,19 L20,10 C20,9.87 19.97,9.74 19.93,9.63 Z M13,6 L16.32,6 L17.52,9 L13,9 L13,6 Z M7.68,6 L11,6 L11,9 L6.48,9 L7.68,6 Z M18,18 L6,18 L6,11 L11,11 L11,13.59 L9.71,12.29 C9.53,12.11 9.28,12 9,12 C8.45,12 8,12.45 8,13 C8,13.28 8.11,13.53 8.29,13.71 L11.29,16.71 C11.47,16.89 11.72,17 12,17 C12.28,17 12.53,16.89 12.71,16.71 L15.71,13.71 C15.89,13.53 16,13.28 16,13 C16,12.45 15.55,12 15,12 C14.72,12 14.47,12.11 14.29,12.29 L13,13.59 L13,11 L18,11 L18,18 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2099.000000, -1915.000000)">
              <g id="Icons-/-Archive" transform="translate(2095.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="compressed" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Archive.propTypes = propTypes;
Archive.defaultProps = defaultProps;

export default Archive;
