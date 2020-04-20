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

const Down = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Down" viewBox="0 0 10 6" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Down</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M16,9 C15.72,9 15.47,9.11 15.29,9.29 L12,12.59 L8.71,9.29 C8.53,9.11 8.28,9 8,9 C7.45,9 7,9.45 7,10 C7,10.28 7.11,10.53 7.29,10.71 L11.29,14.71 C11.47,14.89 11.72,15 12,15 C12.28,15 12.53,14.89 12.71,14.71 L16.71,10.71 C16.89,10.53 17,10.28 17,10 C17,9.45 16.55,9 16,9 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2022.000000, -1840.000000)">
              <g id="Icons-/-Down" transform="translate(2015.000000, 1831.000000)">
                <rect id="Rectangle-Copy-4" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="chevron-down" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Down.propTypes = propTypes;
Down.defaultProps = defaultProps;

export default Down;
