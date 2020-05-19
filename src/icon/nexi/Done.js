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

const Done = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Done" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Done">
            <path
              id="add"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 4.005C7.58265 4.005 4.00488 7.58277 4.00488 12C4.00488 16.4172 7.58265 19.995 11.9999 19.995C16.4171 19.995 19.9949 16.4172 19.9949 12C19.9949 7.58277 16.4171 4.005 11.9999 4.005ZM12.0011 17.9975C8.6932 17.9975 6.00488 15.3092 6.00488 12.0013C6.00488 8.69333 8.6932 6.005 12.0011 6.005C15.3091 6.005 17.9974 8.69333 17.9974 12.0013C17.9974 15.3092 15.3191 17.9975 12.0011 17.9975ZM11.7249 14.7141L15.7349 10.7047C15.9149 10.5248 16.0349 10.2748 16.0249 10.0048C16.0249 9.45493 15.5749 9.005 15.0249 9.005C14.7449 9.005 14.4949 9.11499 14.3149 9.29496L11.0149 12.5944L9.71488 11.2946C9.53488 11.1147 9.28488 11.0047 9.00488 11.0047C8.45488 11.0047 8.00488 11.4546 8.00488 12.0045C8.00488 12.2745 8.12488 12.5245 8.30488 12.7144L10.3049 14.7141C10.4849 14.8941 10.7349 15.0041 11.0149 15.0041C11.2949 15.0041 11.5449 14.8941 11.7249 14.7141Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Done.propTypes = propTypes;
Done.defaultProps = defaultProps;

export default Done;
