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

const UnknownBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="UnknownBlock" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Unknown block">
            <path
              id="error"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 4.005C7.58265 4.005 4.00488 7.58277 4.00488 12C4.00488 16.4172 7.58265 19.995 11.9999 19.995C16.4171 19.995 19.9949 16.4172 19.9949 12C19.9949 7.58277 16.4171 4.005 11.9999 4.005ZM11.0005 15.99V13.99H12.9993V15.99H11.0005ZM11.0005 7.99001V12.99H12.9993V7.99001H11.0005Z"
              fill="#D34C4C"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

UnknownBlock.propTypes = propTypes;
UnknownBlock.defaultProps = defaultProps;

export default UnknownBlock;
