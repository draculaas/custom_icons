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

const Plus = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Plus" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Plus">
            <path
              id="plus"
              d="M17 11H13V7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7V11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13H11V17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Plus.propTypes = propTypes;
Plus.defaultProps = defaultProps;

export default Plus;
