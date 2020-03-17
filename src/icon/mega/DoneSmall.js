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

const DoneSmall = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="DoneSmall" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6ZM16 24C11.59 24 8 20.41 8 16C8 11.59 11.59 8 16 8C20.41 8 24 11.59 24 16C24 20.41 20.41 24 16 24ZM20.59 11.58L14 18.17L11.41 15.59L10 17L14 21L22 13L20.59 11.58Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

DoneSmall.propTypes = propTypes;
DoneSmall.defaultProps = defaultProps;

export default DoneSmall;
