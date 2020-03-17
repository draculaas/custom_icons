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

const Chart = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Chart" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 14C28 11.3478 26.9464 8.8043 25.0711 6.92893C23.1957 5.05357 20.6522 4 18 4H17V15H28V14ZM19 13V6.06C22.6273 6.51587 25.4841 9.37268 25.94 13H19ZM21.07 24.84C19.2281 26.7927 16.6834 27.9301 14 28C8.47715 28 4 23.5228 4 18C4 12.4772 8.47715 8 14 8H15V17H24V18C24.0279 20.2402 23.2427 22.4145 21.79 24.12L21.07 24.84ZM20.3 22.68L16.48 19H21.93C21.7391 20.3543 21.1747 21.6286 20.3 22.68ZM13 10.06C11.221 10.2681 9.56466 11.0716 8.3 12.34H8.34C6.04936 14.6281 5.36368 18.0713 6.60302 21.0623C7.84236 24.0534 10.7623 26.0025 14 26C15.802 25.9521 17.5325 25.2846 18.9 24.11L13 18.41V10.06Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
