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

const Suppport = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Suppport" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Suppport">
            <path
              id="help"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM11 17V15H13V17H11ZM14.31 11.45C14.58 11.12 14.79 10.8 14.93 10.48C15.07 10.15 15.14 9.8 15.14 9.4C15.14 9 15.07 8.63 14.92 8.28C14.76 7.94 14.55 7.64 14.27 7.39C13.99 7.14 13.66 6.95 13.27 6.8C12.88 6.65 12.45 6.58 11.98 6.58C11.05 6.58 10.3 6.82 9.73 7.3C9.16 7.77 8.82 8.42 8.7 9.24C8.68 9.35 8.72 9.42 8.84 9.43L10.54 9.68C10.64 9.69 10.71 9.65 10.74 9.54C10.81 9.19 10.95 8.92 11.14 8.73C11.33 8.54 11.59 8.44 11.92 8.44C12.24 8.44 12.5 8.53 12.68 8.72C12.86 8.92 12.96 9.17 12.96 9.47C12.96 9.67 12.93 9.86 12.84 10.05C12.75 10.24 12.62 10.47 12.4 10.73L11.33 12.17C11.17 12.37 11.12 12.88 11.12 12.88V14H12.88V13.77C12.88 13.55 12.93 13.38 12.97 13.25C13.006 13.1331 13.1067 13.0081 13.2138 12.875C13.2258 12.8601 13.2379 12.8451 13.25 12.83L14.31 11.45Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Suppport.propTypes = propTypes;
Suppport.defaultProps = defaultProps;

export default Suppport;
