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

const Right = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Right" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M12.5 20.8369L17.294 16L12.5 11.1631L14.103 9.5L20.5 16L14.103 22.5L12.5 20.8369Z" fill="#333333" />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Right.propTypes = propTypes;
Right.defaultProps = defaultProps;

export default Right;
