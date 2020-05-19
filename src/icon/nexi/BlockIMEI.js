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
        <Icon title="BlockIMEI" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Block IMEI">
            <path
              id="error"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 4.005C7.58265 4.005 4.00488 7.58277 4.00488 12C4.00488 16.4172 7.58265 19.995 11.9999 19.995C16.4171 19.995 19.9949 16.4172 19.9949 12C19.9949 7.58277 16.4171 4.005 11.9999 4.005ZM8.57713 10.1238H14.0535L13.3153 10.93C13.2123 11.0488 13.1494 11.205 13.1494 11.3738C13.1494 11.7175 13.4069 11.9988 13.7216 11.9988C13.8819 11.9988 14.0249 11.93 14.1279 11.8175L15.8389 9.9425C15.9419 9.83 16.0049 9.67376 16.0049 9.49875C16.0049 9.32375 15.9419 9.1675 15.8389 9.05501L14.1279 7.18C14.0192 7.07375 13.8761 7.005 13.7216 7.005C13.4069 7.005 13.1494 7.28625 13.1494 7.63C13.1494 7.805 13.2123 7.96125 13.3153 8.07375L14.0535 8.88H8.57713C8.26239 8.88 8.00488 9.16125 8.00488 9.505C8.01061 9.84875 8.26239 10.1238 8.57713 10.1238ZM9.95624 13.88H15.4326C15.7474 13.88 16.0049 14.155 16.0049 14.4988C16.0049 14.8425 15.7474 15.1238 15.4326 15.1238H9.95624L10.6944 15.93C10.7974 16.0425 10.8604 16.1988 10.8604 16.3738C10.8604 16.7175 10.6029 16.9988 10.2881 16.9988C10.1336 16.9988 9.99058 16.93 9.88185 16.8175L8.17083 14.9425C8.06783 14.83 8.00488 14.6738 8.00488 14.4988C8.00488 14.33 8.06783 14.1738 8.17083 14.0613L9.88185 12.1863C9.98485 12.0738 10.1279 12.005 10.2881 12.005C10.6029 12.005 10.8604 12.2863 10.8604 12.63C10.8604 12.7988 10.7974 12.955 10.6944 13.0738L9.95624 13.88Z"
              fill="#D34C4C"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

BlockIMEI.propTypes = propTypes;
BlockIMEI.defaultProps = defaultProps;

export default BlockIMEI;
