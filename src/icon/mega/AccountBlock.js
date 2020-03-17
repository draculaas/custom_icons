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

const AccountBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="AccountBlock" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.8136 18.1079C27.7862 12.6545 24.8996 7.24401 19.8284 5.01513C14.7571 2.78625 8.81922 4.31828 5.45934 8.72244C2.09946 13.1266 2.19084 19.2583 5.68045 23.5604C9.17007 27.8625 15.151 29.2169 20.1536 26.8379C22.5643 28.677 26.0095 28.2136 27.8486 25.8029C29.6877 23.3922 29.2243 19.947 26.8136 18.1079ZM11.0136 8.98789H15.0136C17.2227 8.98789 19.0136 10.7788 19.0136 12.9879C19.0136 15.197 17.2227 16.9879 15.0136 16.9879H13.0136V18.9879H17.0136V20.9879H13.0136V22.9879H11.0136V20.9879H9.01358V18.9879H11.0136V16.9879H9.01358V14.9879H11.0136V8.98789ZM13.0136 14.9879H15.0136C16.1181 14.9879 17.0136 14.0925 17.0136 12.9879C17.0136 11.8833 16.1181 10.9879 15.0136 10.9879H13.0136V14.9879ZM15.0136 5.98789C9.49073 5.98789 5.01358 10.465 5.01358 15.9879C5.03813 19.2979 6.69906 22.3814 9.44956 24.223C12.2001 26.0647 15.6837 26.426 18.7536 25.1879C17.6631 23.2673 17.8321 20.8798 19.1823 19.1321C20.5325 17.3843 22.7999 16.6178 24.9336 17.1879C24.984 16.7898 25.0107 16.3891 25.0136 15.9879C25.0136 10.465 20.5364 5.98789 15.0136 5.98789ZM27 22.5C27 24.433 25.433 26 23.5 26C21.567 26 20 24.433 20 22.5C20 20.567 21.567 19 23.5 19C25.433 19 27 20.567 27 22.5ZM22.6161 22.5L21.2903 23.8258L22.1742 24.7097L23.5 23.3839L24.8258 24.7097L25.7097 23.8258L24.3839 22.5L25.7097 21.1742L24.8258 20.2903L23.5 21.6161L22.1742 20.2903L21.2903 21.1742L22.6161 22.5Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

AccountBlock.propTypes = propTypes;
AccountBlock.defaultProps = defaultProps;

export default AccountBlock;
