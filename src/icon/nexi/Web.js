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

const Web = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Web" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Web">
            <path
              id="desktop"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4H19C19.55 4 20 4.45 20 5V15C20 15.55 19.55 16 19 16H14.25L14.75 18H16C16.55 18 17 18.45 17 19C17 19.55 16.55 20 16 20H8C7.45 20 7 19.55 7 19C7 18.45 7.45 18 8 18H9.25L9.75 16H5C4.45 16 4 15.55 4 15V5C4 4.45 4.45 4 5 4ZM6 14H18V6H6V14Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Web.propTypes = propTypes;
Web.defaultProps = defaultProps;

export default Web;
