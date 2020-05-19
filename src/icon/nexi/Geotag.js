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

const Geotag = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Geotag" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Geotag">
            <path
              id="map-marker"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.48999 9.33C6.48999 6.39 8.95999 4 12 4C15.04 4 17.5 6.39 17.51 9.33C17.51 12.28 12 20 12 20C12 20 6.48999 12.28 6.48999 9.33ZM9.49999 9.5C9.49999 10.88 10.62 12 12 12C13.38 12 14.5 10.88 14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.49999 8.12 9.49999 9.5Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Geotag.propTypes = propTypes;
Geotag.defaultProps = defaultProps;

export default Geotag;
