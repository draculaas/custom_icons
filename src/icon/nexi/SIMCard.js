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
        <Icon title="SIMCard" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / SIM-card">
            <path
              id="sim-card"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.71 4.29L17.71 8.29C17.89 8.47 18 8.72 18 9V19C18 19.55 17.55 20 17 20H7C6.45 20 6 19.55 6 19V5C6 4.45 6.45 4 7 4H13C13.28 4 13.53 4.11 13.71 4.29ZM13 10H11V12H13V10ZM8 10H10V12H8V10ZM8 18H10V16H8V18ZM13 18H11V16H13V18ZM14 18H16V16H14V18ZM16 15H8V13H16V15ZM14 12H16V10H14V12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SIMCard.propTypes = propTypes;
SIMCard.defaultProps = defaultProps;

export default SIMCard;
