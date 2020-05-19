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

const Error = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Error" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Error">
            <path
              id="delete"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 4.005C7.58265 4.005 4.00488 7.58277 4.00488 12C4.00488 16.4172 7.58265 19.995 11.9999 19.995C16.4171 19.995 19.9949 16.4172 19.9949 12C19.9949 7.58277 16.4171 4.005 11.9999 4.005ZM15.9974 9.00188C15.9974 8.45223 15.5477 8.00251 14.998 8.00251C14.7182 8.00251 14.4683 8.11244 14.2885 8.29233L11.9999 10.5909L9.71132 8.30232C9.53143 8.11244 9.28158 8.00251 9.00176 8.00251C8.4521 8.00251 8.00238 8.45223 8.00238 9.00188C8.00238 9.28171 8.11232 9.53155 8.2922 9.71144L10.5808 12L8.2922 14.2886C8.11232 14.4685 8.00238 14.7183 8.00238 14.9981C8.00238 15.5478 8.4521 15.9975 9.00176 15.9975C9.28158 15.9975 9.53143 15.8876 9.71132 15.7077L11.9999 13.4191L14.2885 15.7077C14.4683 15.8876 14.7182 15.9975 14.998 15.9975C15.5477 15.9975 15.9974 15.5478 15.9974 14.9981C15.9974 14.7183 15.8875 14.4685 15.7076 14.2886L13.419 12L15.7076 9.71144C15.8875 9.53155 15.9974 9.28171 15.9974 9.00188ZM6.00363 12C6.00363 15.3079 8.69195 17.9963 11.9999 17.9963C15.3178 17.9963 17.9961 15.3079 17.9961 12C17.9961 8.69208 15.3078 6.00376 11.9999 6.00376C8.69195 6.00376 6.00363 8.69208 6.00363 12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
