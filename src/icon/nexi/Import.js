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

const Import = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Import" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Import">
            <path
              id="export"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.71 9.71C8.53 9.89 8.28 10 8 10C7.45 10 7 9.55 7 9C7 8.72 7.11 8.47 7.29 8.29L11.29 4.29C11.47 4.11 11.72 4 12 4C12.28 4 12.53 4.11 12.71 4.29L16.71 8.29C16.89 8.47 17 8.72 17 9C17 9.55 16.55 10 16 10C15.72 10 15.47 9.89 15.29 9.7L13 7.41V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V7.41L8.71 9.71ZM18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V16C4 15.45 4.45 15 5 15C5.55 15 6 15.45 6 16V18H18V16Z"
              fill="#6C808B"
            />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
              <path
                id="export_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.71 9.71C8.53 9.89 8.28 10 8 10C7.45 10 7 9.55 7 9C7 8.72 7.11 8.47 7.29 8.29L11.29 4.29C11.47 4.11 11.72 4 12 4C12.28 4 12.53 4.11 12.71 4.29L16.71 8.29C16.89 8.47 17 8.72 17 9C17 9.55 16.55 10 16 10C15.72 10 15.47 9.89 15.29 9.7L13 7.41V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V7.41L8.71 9.71ZM18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V16C4 15.45 4.45 15 5 15C5.55 15 6 15.45 6 16V18H18V16Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)"></g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Import.propTypes = propTypes;
Import.defaultProps = defaultProps;

export default Import;
