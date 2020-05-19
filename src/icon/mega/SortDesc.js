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

const SortDesc = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SortDesc" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Sort-desc">
            <path
              id="sort-desc"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.5H19C19.55 4.5 20 4.95 20 5.5C20 6.05 19.55 6.5 19 6.5H12C11.45 6.5 11 6.05 11 5.5C11 4.95 11.45 4.5 12 4.5ZM12 8.5H17C17.55 8.5 18 8.95 18 9.5C18 10.05 17.55 10.5 17 10.5H12C11.45 10.5 11 10.05 11 9.5C11 8.95 11.45 8.5 12 8.5ZM5 15.5C5.28 15.5 5.53 15.39 5.71 15.21L6 14.91V18.5C6 19.05 6.45 19.5 7 19.5C7.55 19.5 8 19.05 8 18.5V14.91L8.29 15.2C8.47 15.39 8.72 15.5 9 15.5C9.55 15.5 10 15.05 10 14.5C10 14.22 9.89 13.97 9.71 13.79L7.71 11.79C7.53 11.61 7.28 11.5 7 11.5C6.72 11.5 6.47 11.61 6.29 11.79L4.29 13.79C4.11 13.97 4 14.22 4 14.5C4 15.05 4.45 15.5 5 15.5ZM13 16.5H12C11.45 16.5 11 16.95 11 17.5C11 18.05 11.45 18.5 12 18.5H13C13.55 18.5 14 18.05 14 17.5C14 16.95 13.55 16.5 13 16.5ZM15 12.5H12C11.45 12.5 11 12.95 11 13.5C11 14.05 11.45 14.5 12 14.5H15C15.55 14.5 16 14.05 16 13.5C16 12.95 15.55 12.5 15 12.5Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SortDesc.propTypes = propTypes;
SortDesc.defaultProps = defaultProps;

export default SortDesc;
