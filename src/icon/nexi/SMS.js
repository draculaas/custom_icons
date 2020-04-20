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

const SMS = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SMS" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / SMS</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M10,14 C8.9,14 8,13.1 8,12 L8,7 L5,7 C4.45,7 4,7.45 4,8 L4,16 C4,16.55 4.45,17 5,17 L5,19 C5,19.55 5.45,20 6,20 C6.28,20 6.53,19.89 6.71,19.71 L9.41,17 L14,17 C14.55,17 15,16.55 15,16 L15,14.83 L14.17,14 L10,14 Z M19,4 L10,4 C9.45,4 9,4.45 9,5 L9,12 C9,12.55 9.45,13 10,13 L14.59,13 L17.3,15.71 C17.47,15.89 17.72,16 18,16 C18.55,16 19,15.55 19,15 L19,13 C19.55,13 20,12.55 20,12 L20,5 C20,4.45 19.55,4 19,4 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2259.000000, -1875.000000)">
              <g id="Icons-/-SMS" transform="translate(2255.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="chat" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SMS.propTypes = propTypes;
SMS.defaultProps = defaultProps;

export default SMS;
