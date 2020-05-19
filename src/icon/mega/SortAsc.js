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

const SortAsc = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SortAsc" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Sort-asc">
            <path
              id="sort-asc"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.5H13C13.55 6.5 14 6.05 14 5.5C14 4.95 13.55 4.5 13 4.5H12C11.45 4.5 11 4.95 11 5.5C11 6.05 11.45 6.5 12 6.5ZM12 10.5H15C15.55 10.5 16 10.05 16 9.5C16 8.95 15.55 8.5 15 8.5H12C11.45 8.5 11 8.95 11 9.5C11 10.05 11.45 10.5 12 10.5ZM17 14.5H12C11.45 14.5 11 14.05 11 13.5C11 12.95 11.45 12.5 12 12.5H17C17.55 12.5 18 12.95 18 13.5C18 14.05 17.55 14.5 17 14.5ZM9 15.5C8.72 15.5 8.47 15.61 8.29 15.79L8 16.09V12.5C8 11.95 7.55 11.5 7 11.5C6.45 11.5 6 11.95 6 12.5V16.09L5.71 15.8C5.53 15.61 5.28 15.5 5 15.5C4.45 15.5 4 15.95 4 16.5C4 16.78 4.11 17.03 4.29 17.21L6.29 19.21C6.47 19.39 6.72 19.5 7 19.5C7.28 19.5 7.53 19.39 7.71 19.21L9.71 17.21C9.89 17.03 10 16.78 10 16.5C10 15.95 9.55 15.5 9 15.5ZM12 16.5H19C19.55 16.5 20 16.95 20 17.5C20 18.05 19.55 18.5 19 18.5H12C11.45 18.5 11 18.05 11 17.5C11 16.95 11.45 16.5 12 16.5Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SortAsc.propTypes = propTypes;
SortAsc.defaultProps = defaultProps;

export default SortAsc;
