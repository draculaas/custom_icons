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

const Products = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Products" viewBox="0 0 16 14" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Products</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M7.5,11 L14.5,11 C14.78,11 15,10.78 15,10.5 C15,10.22 14.78,10 14.5,10 L7.5,10 C7.22,10 7,10.22 7,10.5 C7,10.78 7.22,11 7.5,11 Z M19,5 L5,5 C4.45,5 4,5.45 4,6 L4,18 C4,18.55 4.45,19 5,19 L19,19 C19.55,19 20,18.55 20,18 L20,6 C20,5.45 19.55,5 19,5 Z M18,17 L6,17 L6,9 L18,9 L18,17 Z M7.5,13 L11.5,13 C11.78,13 12,12.78 12,12.5 C12,12.22 11.78,12 11.5,12 L7.5,12 C7.22,12 7,12.22 7,12.5 C7,12.78 7.22,13 7.5,13 Z M7.5,15 L12.5,15 C12.78,15 13,14.78 13,14.5 C13,14.22 12.78,14 12.5,14 L7.5,14 C7.22,14 7,14.22 7,14.5 C7,14.78 7.22,15 7.5,15 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2259.000000, -1916.000000)">
              <g id="Icons-/-Products" transform="translate(2255.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="application" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
