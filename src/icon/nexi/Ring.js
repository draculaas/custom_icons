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

const Ring = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Ring" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Ring">
            <path
              id="notifications"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 14C17 14.55 17.45 15 18 15C18.55 15 19 15.45 19 16C19 16.55 18.55 17 18 17H6C5.45 17 5 16.55 5 16C5 15.45 5.45 15 6 15C6.55 15 7 14.55 7 14V10C7 7.57 8.73 5.55 11.02 5.1C11.02 5.08 11.015 5.065 11.01 5.05C11.005 5.035 11 5.02 11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5C13 5.02 12.995 5.035 12.99 5.05C12.985 5.065 12.98 5.08 12.98 5.1C15.27 5.55 17 7.57 17 10V14ZM14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18H14Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Ring.propTypes = propTypes;
Ring.defaultProps = defaultProps;

export default Ring;
