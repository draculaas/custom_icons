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
        <Icon title="ArrowLeft" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19 11V21L13 16L19 11Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowLeft.propTypes = propTypes;
ArrowLeft.defaultProps = defaultProps;

export default ArrowLeft;
