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

const SIMCard = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SIMCard" viewBox="0 0 12 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / SIM-card</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M17.71,8.29 L13.71,4.29 C13.53,4.11 13.28,4 13,4 L7,4 C6.45,4 6,4.45 6,5 L6,19 C6,19.55 6.45,20 7,20 L17,20 C17.55,20 18,19.55 18,19 L18,9 C18,8.72 17.89,8.47 17.71,8.29 Z M11,10 L13,10 L13,12 L11,12 L11,10 Z M8,10 L10,10 L10,12 L8,12 L8,10 Z M10,18 L8,18 L8,16 L10,16 L10,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M16,18 L14,18 L14,16 L16,16 L16,18 Z M16,15 L8,15 L8,13 L16,13 L16,15 Z M16,12 L14,12 L14,10 L16,10 L16,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2181.000000, -1876.000000)">
              <g id="Icons-/-SIM-card" transform="translate(2175.000000, 1872.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="sim-card" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SIMCard.propTypes = propTypes;
SIMCard.defaultProps = defaultProps;

export default SIMCard;
