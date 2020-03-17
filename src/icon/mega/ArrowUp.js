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

const ArrowUp = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ArrowUp" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M21 19H11L16 13L21 19Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ArrowUp.propTypes = propTypes;
ArrowUp.defaultProps = defaultProps;

export default ArrowUp;
