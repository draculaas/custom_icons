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
        <Icon title="SMS" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.37 28.0154L10.37 26.5954C15.5054 29.3264 21.86 27.9813 25.4485 23.4037C29.0369 18.8261 28.8258 12.3342 24.9476 7.99932C21.0694 3.66447 14.6409 2.73499 9.69369 5.79379C4.74648 8.85259 2.70518 15.0189 4.85 20.4254L3 24.5254L5.37 28.0154ZM20 13.0154H12V15.0154H20V13.0154ZM18 17.0154H12V19.0154H18V17.0154ZM10.6384 7.59771C6.49875 10.2462 4.89709 15.5101 6.86 20.0154L7 20.3654L5 24.5254L6 26.0154L10.74 24.5254L11 24.6654C15.2481 27.1362 20.6619 26.1541 23.7714 22.3485C26.8809 18.543 26.7643 13.0421 23.4964 9.37161C20.2286 5.70116 14.778 4.94921 10.6384 7.59771Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SMS.propTypes = propTypes;
SMS.defaultProps = defaultProps;

export default SMS;
