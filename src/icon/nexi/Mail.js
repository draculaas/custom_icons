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

const Mail = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Mail" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Mail">
            <path
              id="envelope"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 12.94L5.06 6H18.94L12 12.94ZM8.94 12L4 16.94V7.06L8.94 12ZM12.53 14.53C12.39 14.67 12.21 14.75 12 14.75C11.79 14.75 11.61 14.67 11.47 14.53L10 13.06L5.06 18H18.94L14 13.06L12.53 14.53ZM20 16.94L15.06 12L20 7.06V16.94Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Mail.propTypes = propTypes;
Mail.defaultProps = defaultProps;

export default Mail;
