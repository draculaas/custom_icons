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

const ArrowUp = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowUp" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Arrow Up">
            <path
              id="caret-up"
              d="M15.87 13.67C15.87 13.67 15.88 13.67 15.87 13.67L12.37 9.67C12.28 9.57 12.15 9.5 12 9.5C11.85 9.5 11.72 9.57 11.63 9.67L8.13 13.67C8.05 13.76 8 13.87 8 14C8 14.28 8.22 14.5 8.5 14.5H15.5C15.78 14.5 16 14.28 16 14C16 13.87 15.95 13.76 15.87 13.67Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowUp.propTypes = propTypes;
ArrowUp.defaultProps = defaultProps;

export default ArrowUp;
