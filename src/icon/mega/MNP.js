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

const MNP = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="MNP" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.54 4L7 11.63V28H25V4H13.54ZM9 12.37L14.46 6.001H23V26.001H9V12.37ZM14.2712 11.6126L11.0002 14.3206V15.6796L14.2712 18.3876L15.5462 16.8466L14.0002 16.0006H20.0002V14.0006H14.0002L15.5462 13.1536L14.2712 11.6126ZM16.4494 19.1526L17.9924 19.9976H12.0034V21.9976H17.9994L16.4494 22.8476L17.7244 24.3876L20.9954 21.6786V20.3216L17.7244 17.6126L16.4494 19.1526Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

MNP.propTypes = propTypes;
MNP.defaultProps = defaultProps;

export default MNP;
