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

const ArrowDown = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowDown" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Arrow Down">
            <path
              id="caret-down"
              d="M16 10C16 9.72 15.78 9.5 15.5 9.5H8.5C8.22 9.5 8 9.72 8 10C8 10.13 8.05 10.24 8.13 10.33L11.63 14.33C11.72 14.43 11.85 14.5 12 14.5C12.15 14.5 12.28 14.43 12.37 14.33L15.87 10.33C15.95 10.24 16 10.13 16 10Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowDown.propTypes = propTypes;
ArrowDown.defaultProps = defaultProps;

export default ArrowDown;
