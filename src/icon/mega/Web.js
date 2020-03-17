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

const Web = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Web" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 6H26H28V8V20V22H26H17V24H21V26H17H15H11V24H15V22H6H4V20V8V6H6ZM6 8H26V20H6V8ZM17.5 14C17.5 14.8284 16.8284 15.5 16 15.5C15.1716 15.5 14.5 14.8284 14.5 14C14.5 13.1716 15.1716 12.5 16 12.5C16.8284 12.5 17.5 13.1716 17.5 14ZM20 15.5C20.8284 15.5 21.5 14.8284 21.5 14C21.5 13.1716 20.8284 12.5 20 12.5C19.1716 12.5 18.5 13.1716 18.5 14C18.5 14.8284 19.1716 15.5 20 15.5ZM13.5 14C13.5 14.8284 12.8284 15.5 12 15.5C11.1716 15.5 10.5 14.8284 10.5 14C10.5 13.1716 11.1716 12.5 12 12.5C12.8284 12.5 13.5 13.1716 13.5 14Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Web.propTypes = propTypes;
Web.defaultProps = defaultProps;

export default Web;
