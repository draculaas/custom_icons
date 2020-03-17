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

const AttentionSmall = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="AttentionSmall" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M15 19H17V21H15V19ZM15 11H17V17H15V11ZM16 6C10.47 6 6 10.5 6 16C6 18.6522 7.05357 21.1957 8.92893 23.0711C9.85752 23.9997 10.9599 24.7362 12.1732 25.2388C13.3864 25.7413 14.6868 26 16 26C18.6522 26 21.1957 24.9464 23.0711 23.0711C24.9464 21.1957 26 18.6522 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7362 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6V6ZM16 24C13.8783 24 11.8434 23.1571 10.3431 21.6569C8.84285 20.1566 8 18.1217 8 16C8 13.8783 8.84285 11.8434 10.3431 10.3431C11.8434 8.84285 13.8783 8 16 8C18.1217 8 20.1566 8.84285 21.6569 10.3431C23.1571 11.8434 24 13.8783 24 16C24 18.1217 23.1571 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24V24Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

AttentionSmall.propTypes = propTypes;
AttentionSmall.defaultProps = defaultProps;

export default AttentionSmall;
