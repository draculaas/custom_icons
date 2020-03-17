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

const Up = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Up" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M20.8369 20L16 15.206L11.1631 20L9.5 18.397L16 12L22.5 18.397L20.8369 20Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Up.propTypes = propTypes;
Up.defaultProps = defaultProps;

export default Up;
