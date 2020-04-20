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

const Filter = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Filter" viewBox="0 0 14 14" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Filter</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M18,5 L6,5 C5.45,5 5,5.45 5,6 C5,6.28 5.11,6.53 5.29,6.71 L10,11.42 L10,18.01 C10,18.56 10.45,19.01 11,19.01 C11.28,19.01 11.53,18.9 11.71,18.72 L13.71,16.72 C13.89,16.54 14,16.29 14,16.01 L14,11.42 L18.71,6.71 C18.89,6.53 19,6.28 19,6 C19,5.45 18.55,5 18,5 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1860.000000, -1916.000000)">
              <g id="Icons-/-Filter" transform="translate(1855.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="filter" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
