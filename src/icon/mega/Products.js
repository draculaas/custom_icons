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
        <Icon title="Products" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5H14V15H4V5ZM6 13H12V7H6V13ZM14 17H4V27H14V17ZM6 25H12V19H6V25ZM18 5H25V7H18V5ZM28 9H18V11H28V9ZM18 13H22V15H18V13ZM26 19V17H18V19H26ZM18 27V25H28V27H18ZM23 21H18V23H23V21Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
