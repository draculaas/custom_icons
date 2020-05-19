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
        <Icon title="Active" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Active">
            <path
              id="tick-circle"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM15.29 9.29C15.47 9.11 15.72 9 16 9C16.55 9 17 9.45 17 10C17 10.28 16.89 10.53 16.71 10.71L11.71 15.71C11.53 15.89 11.28 16 11 16C10.72 16 10.47 15.89 10.29 15.71L7.29 12.71C7.11 12.53 7 12.28 7 12C7 11.45 7.45 11 8 11C8.28 11 8.53 11.11 8.71 11.29L11 13.59L15.29 9.29Z"
              fill="#00AD21"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Active.propTypes = propTypes;
Active.defaultProps = defaultProps;

export default Active;
