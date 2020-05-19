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

const Map = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Map" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Map">
            <path
              id="map"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.06 4.17L19.55 7.17C19.82 7.35 20 7.65 20 8V19C20 19.55 19.55 20 19 20C18.79 20 18.6 19.94 18.44 19.83L14.47 17.18L10.01 19.85C9.86 19.94 9.69 20 9.5 20C9.29 20 9.1 19.94 8.94 19.83L4.45 16.83C4.18 16.65 4 16.35 4 16V5C4 4.45 4.45 4 5 4C5.21 4 5.4 4.06 5.56 4.17L9.53 6.82L13.99 4.15C14.14 4.06 14.31 4 14.5 4C14.71 4 14.9 4.06 15.06 4.17ZM6 15.46L9 17.46V8.86C8.98 8.85 8.96 8.84 8.94 8.82L6 6.86V15.46ZM14 15.14C14 15.14 13.99 15.14 13.99 15.15L10 17.53V8.86C10 8.86 10.01 8.86 10.01 8.85L14 6.47V15.14ZM15.06 15.17L18 17.13H18.01V8.54L15.01 6.54V15.14C15.02 15.15 15.04 15.16 15.06 15.17Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Map;
