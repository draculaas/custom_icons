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

const InProgress = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="InProgress" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / In progress">
            <path
              id="time"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM13 8V11.59L14.71 13.29C14.89 13.47 15 13.72 15 14C15 14.55 14.55 15 14 15C13.72 15 13.47 14.89 13.29 14.71L11.29 12.71C11.11 12.53 11 12.28 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

InProgress.propTypes = propTypes;
InProgress.defaultProps = defaultProps;

export default InProgress;
