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

const Left = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Left" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Left">
            <path
              id="chevron-left"
              d="M11.41 12L14.7 8.71C14.89 8.53 15 8.28 15 8C15 7.45 14.55 7 14 7C13.72 7 13.47 7.11 13.29 7.29L9.29 11.29C9.11 11.47 9 11.72 9 12C9 12.28 9.11 12.53 9.29 12.71L13.29 16.71C13.47 16.89 13.72 17 14 17C14.55 17 15 16.55 15 16C15 15.72 14.89 15.47 14.71 15.29L11.41 12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Left.propTypes = propTypes;
Left.defaultProps = defaultProps;

export default Left;
