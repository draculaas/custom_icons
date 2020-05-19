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

const ArrowRight = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowRight" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Arrow Right">
            <path
              id="caret-right"
              d="M14.5 12C14.5 11.85 14.43 11.72 14.33 11.63L10.33 8.13C10.24 8.05 10.13 8 10 8C9.72 8 9.5 8.22 9.5 8.5V15.5C9.5 15.78 9.72 16 10 16C10.13 16 10.24 15.95 10.33 15.87L14.33 12.37C14.43 12.28 14.5 12.15 14.5 12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowRight.propTypes = propTypes;
ArrowRight.defaultProps = defaultProps;

export default ArrowRight;
