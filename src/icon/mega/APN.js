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

const APN = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="APN" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 4C9.383 4 4 9.383 4 16C4 20.914 6.972 25.142 11.209 26.996L11.629 24.98C8.302 23.354 6 19.945 6 16C6 10.486 10.486 6 16 6C21.514 6 26 10.486 26 16C26 19.945 23.697 23.354 20.371 24.98L20.791 26.996C25.028 25.142 28 20.914 28 16C28 9.383 22.617 4 16 4ZM17 17.7324C17.5978 17.3866 18 16.7403 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 16.7403 14.4022 17.3866 15 17.7324V28H17V17.7324ZM12.7206 19.7431L12.2686 21.9121C10.3086 20.6701 8.9996 18.4871 8.9996 16.0001C8.9996 12.1401 12.1406 9.0001 15.9996 9.0001C19.8596 9.0001 22.9996 12.1401 22.9996 16.0001C22.9996 18.4871 21.6916 20.6701 19.7316 21.9121L19.2806 19.7431C20.3256 18.8261 20.9996 17.4971 20.9996 16.0001C20.9996 13.2431 18.7566 11.0001 15.9996 11.0001C13.2436 11.0001 10.9996 13.2431 10.9996 16.0001C10.9996 17.4971 11.6746 18.8261 12.7206 19.7431Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

APN.propTypes = propTypes;
APN.defaultProps = defaultProps;

export default APN;
