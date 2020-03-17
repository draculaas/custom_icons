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

const BlockIMEI = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="BlockIMEI" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.54 4L3 11.63V28H21V4H9.54Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 12.37L10.46 6.00098H19V26.001H5V12.37Z" fill="white" />
          <circle cx="20.5" cy="19.5" r="8.5" fill="#333333" />
          <circle cx="20.5" cy="19.5" r="6.5" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2909 15L17 16.9078V17.8652L19.2909 19.773L20.1838 18.6874L19.1011 18.0914H23.3032V16.6824H19.1011L20.1838 16.0856L19.2909 15Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.8162 20.3119L21.8968 20.9072H17.7024V22.3162H21.9017L20.8162 22.915L21.7091 23.9999L24 22.0914V21.1354L21.7091 19.2269L20.8162 20.3119Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

BlockIMEI.propTypes = propTypes;
BlockIMEI.defaultProps = defaultProps;

export default BlockIMEI;
