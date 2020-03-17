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

const Error = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Error" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M16 25.6C10.708 25.6 6.4 21.292 6.4 16C6.4 10.708 10.708 6.4 16 6.4C21.292 6.4 25.6 10.708 25.6 16C25.6 21.292 21.292 25.6 16 25.6ZM16 4C9.364 4 4 9.364 4 16C4 22.636 9.364 28 16 28C22.636 28 28 22.636 28 16C28 9.364 22.636 4 16 4ZM19.108 11.2L16 14.308L12.892 11.2L11.2 12.892L14.308 16L11.2 19.108L12.892 20.8L16 17.692L19.108 20.8L20.8 19.108L17.692 16L20.8 12.892L19.108 11.2Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
