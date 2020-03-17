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

const Remove = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Remove" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4 4L12.34 6H7V14H9.07L10.07 28H21.93L22.93 14H25V6H19.62L18.62 4H13.4ZM20.07 26H12L11.1 14H20.95L20.07 26ZM23 12V8H18.38L17.38 6H14.6L13.55 8H9V12H23Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Remove.propTypes = propTypes;
Remove.defaultProps = defaultProps;

export default Remove;
