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

const User = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="User" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 10C10 13.3137 12.6863 16 16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10ZM25 21.57L23 29H9L7 21.57L7.32 21.27C9.69652 19.1229 12.7975 17.9547 16 18C19.2013 17.9509 22.3025 19.1157 24.68 21.26L25 21.57ZM22.87 22.34C20.9189 20.7901 18.4915 19.9633 16 20C13.5085 19.9633 11.0811 20.7901 9.13 22.34L10.37 27H21.63L22.87 22.34ZM16 14C18.2091 14 20 12.2091 20 10C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10C12 12.2091 13.7909 14 16 14Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;
