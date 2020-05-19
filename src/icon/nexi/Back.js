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

const Back = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Back" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Back">
            <path
              id="arrow-left"
              d="M17.9951 11H8.41512L11.7051 7.71C11.8851 7.53 11.9951 7.28 11.9951 7C11.9951 6.45 11.5451 6 10.9951 6C10.7151 6 10.4651 6.11 10.2851 6.29L5.28512 11.29C5.10512 11.48 4.99512 11.73 4.99512 12C4.99512 12.27 5.10512 12.53 5.28512 12.71L10.2851 17.71C10.4651 17.89 10.7151 18 10.9951 18C11.5451 18 11.9951 17.55 11.9951 17C11.9951 16.72 11.8851 16.47 11.7051 16.29L8.41512 13H18.0051C18.5551 13 19.0051 12.55 19.0051 12C19.0051 11.45 18.5451 11 17.9951 11Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
