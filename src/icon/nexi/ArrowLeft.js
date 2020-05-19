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

const ArrowLeft = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowLeft" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Arrow Left">
            <path
              id="caret-left"
              d="M14 8C13.87 8 13.76 8.05 13.67 8.13L9.67 11.63C9.57 11.72 9.5 11.85 9.5 12C9.5 12.15 9.57 12.28 9.67 12.37L13.67 15.87C13.76 15.95 13.87 16 14 16C14.28 16 14.5 15.78 14.5 15.5V8.5C14.5 8.22 14.28 8 14 8Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowLeft.propTypes = propTypes;
ArrowLeft.defaultProps = defaultProps;

export default ArrowLeft;
