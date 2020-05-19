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

const Down = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Down" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Down">
            <path
              id="chevron-down"
              d="M16 9C15.72 9 15.47 9.11 15.29 9.29L12 12.59L8.71 9.29C8.53 9.11 8.28 9 8 9C7.45 9 7 9.45 7 10C7 10.28 7.11 10.53 7.29 10.71L11.29 14.71C11.47 14.89 11.72 15 12 15C12.28 15 12.53 14.89 12.71 14.71L16.71 10.71C16.89 10.53 17 10.28 17 10C17 9.45 16.55 9 16 9Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Down.propTypes = propTypes;
Down.defaultProps = defaultProps;

export default Down;
