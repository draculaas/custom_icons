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

const Left = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Left" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M19.5 20.8369L14.706 16L19.5 11.1631L17.897 9.5L11.5 16L17.897 22.5L19.5 20.8369Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Left.propTypes = propTypes;
Left.defaultProps = defaultProps;

export default Left;
