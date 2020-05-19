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

const Up = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Up" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Up">
            <path
              id="chevron-up"
              d="M16.71 13.29L12.71 9.29C12.53 9.11 12.28 9 12 9C11.72 9 11.47 9.11 11.29 9.29L7.29 13.29C7.11 13.47 7 13.72 7 14C7 14.55 7.45 15 8 15C8.28 15 8.53 14.89 8.71 14.71L12 11.41L15.29 14.7C15.47 14.89 15.72 15 16 15C16.55 15 17 14.55 17 14C17 13.72 16.89 13.47 16.71 13.29Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Up.propTypes = propTypes;
Up.defaultProps = defaultProps;

export default Up;
