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

const OutOfCash = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="OutOfCash" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.54 4L3 11.63V28H21V4H9.54Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 12.37L10.46 6.00098H19V26.001H5V12.37Z" fill="white" />
          <path
            d="M20.4985 27C16.357 26.9992 13 23.6416 13 19.5C13 15.3579 16.3579 12 20.5 12C24.6416 12 27.9992 15.357 28 19.4985C27.9936 23.6388 24.6388 26.9936 20.4985 27Z"
            fill="white"
            stroke="#333333"
            stroke-width="2"
          />
          <path
            d="M21 14H18V18H17V20H18V21H17V23H18V24H20V23H22V21H20V20H21.17C21.932 19.9975 22.661 19.6889 23.1932 19.1435C23.7254 18.5982 24.0161 17.8618 24 17.1V16.95V16.95C23.9727 15.3127 22.6375 13.9998 21 14Z"
            fill="#333333"
          />
          <path d="M21.12 18H20V16H21C21.5523 16 22 16.4477 22 17C22 17.31 21.87 18 21.15 18H21.12Z" fill="white" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

OutOfCash.propTypes = propTypes;
OutOfCash.defaultProps = defaultProps;

export default OutOfCash;
