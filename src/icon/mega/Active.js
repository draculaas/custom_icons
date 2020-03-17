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

const Active = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Active" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.54 4L3 11.63V28H21V4H9.54Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 12.37L10.46 6.00098H19V26.001H5V12.37Z" fill="white" />
          <circle cx="20.5" cy="19.5" r="8.5" fill="#333333" />
          <path
            d="M20.5611 25.9999C17.7588 26.0116 15.2611 24.244 14.353 21.6064C13.4448 18.9688 14.3285 16.0488 16.5494 14.3486C18.7704 12.6483 22.17 12.9511 24.5 14.5002L20.5 19.0002L19 17.5002L17.5 19.9998L19.5 21.9998H21.5L26 16.4998C26.8521 18.4922 27.1295 21.2318 25.9422 23.0466C24.7549 24.8613 22.7372 25.9686 20.5611 25.9999Z"
            fill="white"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Active.propTypes = propTypes;
Active.defaultProps = defaultProps;

export default Active;
