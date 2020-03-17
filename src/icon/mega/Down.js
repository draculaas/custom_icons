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

const Down = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Down" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M11.1631 12L16 16.794L20.8369 12L22.5 13.603L16 20L9.5 13.603L11.1631 12Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Down.propTypes = propTypes;
Down.defaultProps = defaultProps;

export default Down;
