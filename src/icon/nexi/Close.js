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

const Close = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Close" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Close">
            <path
              id="cross"
              d="M13.41 12L16.7 8.71C16.89 8.53 17 8.28 17 8C17 7.45 16.55 7 16 7C15.72 7 15.47 7.11 15.29 7.29L12 10.59L8.71 7.29C8.53 7.11 8.28 7 8 7C7.45 7 7 7.45 7 8C7 8.28 7.11 8.53 7.29 8.71L10.59 12L7.3 15.29C7.11 15.47 7 15.72 7 16C7 16.55 7.45 17 8 17C8.28 17 8.53 16.89 8.71 16.71L12 13.41L15.29 16.7C15.47 16.89 15.72 17 16 17C16.55 17 17 16.55 17 16C17 15.72 16.89 15.47 16.71 15.29L13.41 12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
