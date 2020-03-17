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

const Back = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Back" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M25 15H10.83L14.41 11.41L13 10L7 16L13 22L14.41 20.59L10.83 17H25V15Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
