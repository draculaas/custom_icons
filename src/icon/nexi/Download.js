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

const Download = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Download" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Download">
            <path
              id="import"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16C11.72 16 11.47 15.89 11.29 15.71L7.29 11.71C7.11 11.53 7 11.28 7 11C7 10.45 7.45 10 8 10C8.28 10 8.53 10.11 8.71 10.29L11 12.59V5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5V12.59L15.29 10.29C15.47 10.11 15.72 10 16 10C16.55 10 17 10.45 17 11C17 11.28 16.89 11.53 16.71 11.71L12.71 15.71C12.53 15.89 12.28 16 12 16ZM18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V16C4 15.45 4.45 15 5 15C5.55 15 6 15.45 6 16V18H18V16Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Download.propTypes = propTypes;
Download.defaultProps = defaultProps;

export default Download;
