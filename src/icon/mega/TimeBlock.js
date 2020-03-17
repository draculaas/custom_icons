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

const TimeBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="TimeBlock" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.54 4L3 11.63V28H21V4H9.54Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 12.37L10.46 6.00098H19V26.001H5V12.37Z" fill="white" />
          <circle cx="20.5" cy="19.5" r="8.5" fill="white" />
          <path
            d="M20.5 11C21.6162 11 22.7215 11.2199 23.7528 11.647C24.7841 12.0742 25.7211 12.7003 26.5104 13.4896C27.2997 14.2789 27.9258 15.2159 28.353 16.2472C28.7801 17.2785 29 18.3838 29 19.5C29 21.7543 28.1045 23.9163 26.5104 25.5104C24.9163 27.1045 22.7543 28 20.5 28C19.3838 28 18.2785 27.7801 17.2472 27.353C16.2159 26.9258 15.2789 26.2997 14.4896 25.5104C12.8955 23.9163 12 21.7543 12 19.5C12 17.2457 12.8955 15.0837 14.4896 13.4896C16.0837 11.8955 18.2457 11 20.5 11V11ZM20.5 12.7C18.6965 12.7 16.9669 13.4164 15.6917 14.6917C14.4164 15.9669 13.7 17.6965 13.7 19.5C13.7 21.3035 14.4164 23.0331 15.6917 24.3083C16.9669 25.5836 18.6965 26.3 20.5 26.3C22.3035 26.3 24.0331 25.5836 25.3083 24.3083C26.5836 23.0331 27.3 21.3035 27.3 19.5C27.3 17.6965 26.5836 15.9669 25.3083 14.6917C24.0331 13.4164 22.3035 12.7 20.5 12.7V12.7ZM24.665 15.335L20.5 19.5V13.55C22.115 13.55 23.645 14.23 24.665 15.335Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

TimeBlock.propTypes = propTypes;
TimeBlock.defaultProps = defaultProps;

export default TimeBlock;
