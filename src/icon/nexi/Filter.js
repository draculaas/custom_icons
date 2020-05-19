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

const Filter = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Filter" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Filter">
            <path
              id="filter"
              d="M18 5H6C5.45 5 5 5.45 5 6C5 6.28 5.11 6.53 5.29 6.71L10 11.42V18.01C10 18.56 10.45 19.01 11 19.01C11.28 19.01 11.53 18.9 11.71 18.72L13.71 16.72C13.89 16.54 14 16.29 14 16.01V11.42L18.71 6.71C18.89 6.53 19 6.28 19 6C19 5.45 18.55 5 18 5Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
