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
        <Icon title="Chart" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Chart</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M10.485,5.58 C7.115,6.08 4.515,8.98 4.515,12.5 C4.515,16.37 7.645,19.5 11.495,19.5 C15.015,19.5 17.915,16.89 18.405,13.5 L10.485,13.5 L10.485,5.58 Z M11.485,4.5 L11.485,12.5 L19.485,12.5 C19.485,8.08 15.905,4.5 11.485,4.5 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2139.000000, -1875.000000)">
              <g id="Icons-/-Chart" transform="translate(2135.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="pie-chart" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
