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

const SMS = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SMS" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / SMS">
            <path
              id="chat"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 4H19C19.55 4 20 4.45 20 5V12C20 12.55 19.55 13 19 13V15C19 15.55 18.55 16 18 16C17.72 16 17.47 15.89 17.3 15.71L14.59 13H10C9.45 13 9 12.55 9 12V5C9 4.45 9.45 4 10 4ZM8 12C8 13.1 8.9 14 10 14H14.17L15 14.83V16C15 16.55 14.55 17 14 17H9.41L6.71 19.71C6.53 19.89 6.28 20 6 20C5.45 20 5 19.55 5 19V17C4.45 17 4 16.55 4 16V8C4 7.45 4.45 7 5 7H8V12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SMS.propTypes = propTypes;
SMS.defaultProps = defaultProps;

export default SMS;
