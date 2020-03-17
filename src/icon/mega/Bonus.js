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

const Bonus = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Bonus" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9953 4.25111C22.8011 4.88088 24.008 6.58755 24 8.50001C24.0013 9.39044 23.7367 10.261 23.24 11H28V19H26V28H6V19H4V11H8.76C7.45989 9.00072 7.9496 6.33384 9.8752 4.92688C11.8008 3.51992 14.4904 3.86381 16 5.71001C17.183 4.20733 19.1895 3.62133 20.9953 4.25111ZM19.5 6.00001C18.1193 6.00001 17 7.1193 17 8.50001V11H19.5C20.8807 11 22 9.88072 22 8.50001C22 7.1193 20.8807 6.00001 19.5 6.00001ZM12.5 6.00001C13.8807 6.00001 15 7.1193 15 8.50001V11H12.5C11.1193 11 10 9.88072 10 8.50001C10 7.1193 11.1193 6.00001 12.5 6.00001ZM8 26H15V19H8V26ZM24 26H17V19H24V26ZM26 17V13H6V17H26Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Bonus.propTypes = propTypes;
Bonus.defaultProps = defaultProps;

export default Bonus;
