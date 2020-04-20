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

const Download = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Download" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Download</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M11.29,15.71 C11.47,15.89 11.72,16 12,16 C12.28,16 12.53,15.89 12.71,15.71 L16.71,11.71 C16.89,11.53 17,11.28 17,11 C17,10.45 16.55,10 16,10 C15.72,10 15.47,10.11 15.29,10.29 L13,12.59 L13,5 C13,4.45 12.55,4 12,4 C11.45,4 11,4.45 11,5 L11,12.59 L8.71,10.29 C8.53,10.11 8.28,10 8,10 C7.45,10 7,10.45 7,11 C7,11.28 7.11,11.53 7.29,11.71 L11.29,15.71 Z M19,15 C18.45,15 18,15.45 18,16 L18,18 L6,18 L6,16 C6,15.45 5.55,15 5,15 C4.45,15 4,15.45 4,16 L4,19 C4,19.55 4.45,20 5,20 L19,20 C19.55,20 20,19.55 20,19 L20,16 C20,15.45 19.55,15 19,15 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2179.000000, -1836.000000)">
              <g id="Icons-/-Download" transform="translate(2175.000000, 1832.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="import" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Download.propTypes = propTypes;
Download.defaultProps = defaultProps;

export default Download;
