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
        <Icon title="Chart" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Chart">
            <path
              id="pie-chart"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4849 12.5V4.5C15.9049 4.5 19.4849 8.08 19.4849 12.5H11.4849ZM4.51489 12.5C4.51489 8.98 7.11489 6.08 10.4849 5.58V13.5H18.4049C17.9149 16.89 15.0149 19.5 11.4949 19.5C7.64489 19.5 4.51489 16.37 4.51489 12.5Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
