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

const Signal = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Signal" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 16.212C6 13.13 7.403 10.371 9.603 8.535L8.323 7C5.684 9.203 4 12.514 4 16.212C4 19.91 5.684 23.222 8.323 25.425L9.603 23.889C7.403 22.053 6 19.294 6 16.212M23.677 7L22.397 8.535C24.597 10.371 26 13.13 26 16.212C26 19.294 24.597 22.053 22.397 23.889L23.677 25.425C26.316 23.222 28 19.911 28 16.212C28 12.514 26.316 9.202 23.677 7M11.522 21.586L12.815 20.034C11.716 19.116 11 17.753 11 16.212C11 14.671 11.716 13.308 12.815 12.39L11.521 10.838C9.982 12.123 9 14.054 9 16.212C9 18.369 9.982 20.301 11.522 21.586M21 16.212C21 17.753 20.284 19.116 19.185 20.034L20.479 21.586C22.018 20.301 23 18.369 23 16.212C23 14.055 22.018 12.123 20.479 10.838L19.185 12.39C20.284 13.308 21 14.671 21 16.212M18 16.212C18 17.316 17.104 18.212 16 18.212C14.896 18.212 14 17.316 14 16.212C14 15.108 14.896 14.212 16 14.212C17.104 14.212 18 15.108 18 16.212"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Signal.propTypes = propTypes;
Signal.defaultProps = defaultProps;

export default Signal;
