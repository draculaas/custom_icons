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

const Done = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Done" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4ZM16 25.6C10.708 25.6 6.4 21.292 6.4 16C6.4 10.708 10.708 6.4 16 6.4C21.292 6.4 25.6 10.708 25.6 16C25.6 21.292 21.292 25.6 16 25.6ZM21.508 10.696L13.6 18.604L10.492 15.508L8.8 17.2L13.6 22L23.2 12.4L21.508 10.696Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Done.propTypes = propTypes;
Done.defaultProps = defaultProps;

export default Done;
