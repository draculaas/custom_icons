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
        <Icon title="Import" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M7 17.01V26.01H25V17.01H23V24.01H9V17.01H7V17.01Z" fill="#333333" />
          <path
            d="M13.71 10.49L15.03 8.94001L14.96 19.99L16.96 20.01L17.03 9.00001L18.29 10.49L19.71 9.08001L16.63 6.00001H15.37L12.29 9.08001L13.71 10.49V10.49Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Import.propTypes = propTypes;
Import.defaultProps = defaultProps;

export default Import;
