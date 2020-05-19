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
        <Icon title="Right" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Right">
            <path
              id="chevron-right"
              d="M14.71 11.29L10.71 7.29C10.53 7.11 10.28 7 10 7C9.45 7 9 7.45 9 8C9 8.28 9.11 8.53 9.29 8.71L12.59 12L9.3 15.29C9.11 15.47 9 15.72 9 16C9 16.55 9.45 17 10 17C10.28 17 10.53 16.89 10.71 16.71L14.71 12.71C14.89 12.53 15 12.28 15 12C15 11.72 14.89 11.47 14.71 11.29Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Right.propTypes = propTypes;
Right.defaultProps = defaultProps;

export default Right;
