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

const Remove = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Remove" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Remove">
            <path
              id="trash"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 4.99938H18C18.55 4.99938 19 5.44909 19 5.99875V6.99813H5V5.99875C5 5.44909 5.45 4.99938 6 4.99938H10C10 4.44972 10.45 4 11 4H13C13.55 4 14 4.44972 14 4.99938ZM18.5 7.9975H5.5C5.22 7.9975 5 8.21736 5 8.49719C5 8.77701 5.22 8.99688 5.5 8.99688H6V18.9906C6 19.5403 6.45 19.99 7 19.99H17C17.55 19.99 18 19.5403 18 18.9906V8.99688H18.5C18.78 8.99688 19 8.77701 19 8.49719C19 8.21736 18.78 7.9975 18.5 7.9975ZM10 16.9919C10 17.5415 9.55 17.9913 9 17.9913C8.45 17.9913 8 17.5415 8 16.9919V10.9956C8 10.446 8.45 9.99625 9 9.99625C9.55 9.99625 10 10.446 10 10.9956V16.9919ZM12 17.9913C12.55 17.9913 13 17.5415 13 16.9919V10.9956C13 10.446 12.55 9.99625 12 9.99625C11.45 9.99625 11 10.446 11 10.9956V16.9919C11 17.5415 11.45 17.9913 12 17.9913ZM16 16.9919C16 17.5415 15.55 17.9913 15 17.9913C14.45 17.9913 14 17.5415 14 16.9919V10.9956C14 10.446 14.45 9.99625 15 9.99625C15.55 9.99625 16 10.446 16 10.9956V16.9919Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Remove.propTypes = propTypes;
Remove.defaultProps = defaultProps;

export default Remove;
