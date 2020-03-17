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

const Search = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Search" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7055 22.2009C19.0366 23.3715 17.0483 24 15.0104 24.0009C10.2646 24.0095 6.16754 20.6755 5.20754 16.0237C4.24755 11.372 6.68953 6.68616 11.0504 4.81213C15.4113 2.93811 20.4876 4.39304 23.1963 8.29332C25.9051 12.1936 25.4988 17.4628 22.2241 20.9009L27 26.7209L25.5313 28.0009L20.7055 22.2009ZM23.0034 14.001C23.0034 9.5827 19.4248 6.00098 15.0103 6.00098C10.5959 6.00098 7.01729 9.5827 7.01729 14.001C7.01729 18.4193 10.5959 22.001 15.0103 22.001C19.4248 22.001 23.0034 18.4193 23.0034 14.001Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
