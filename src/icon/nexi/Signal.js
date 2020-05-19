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

const Signal = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Signal" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Signal">
            <path
              id="feed"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00363 5.00438C6.00363 4.45472 6.45335 4.005 7.00301 4.005C14.1785 4.005 19.9949 9.82137 19.9949 16.9969C19.9949 17.5465 19.5452 17.9963 18.9955 17.9963C18.4459 17.9963 17.9961 17.5465 17.9961 16.9969C17.9961 10.9207 13.0792 6.00376 7.00301 6.00376C6.45335 6.00376 6.00363 5.55404 6.00363 5.00438ZM7.00301 8.00251C6.45335 8.00251 6.00363 8.45223 6.00363 9.00188C6.00363 9.55154 6.45335 10.0013 7.00301 10.0013C10.8706 10.0013 13.9986 13.1293 13.9986 16.9969C13.9986 17.5465 14.4484 17.9963 14.998 17.9963C15.5477 17.9963 15.9974 17.5465 15.9974 16.9969C15.9974 12.03 11.9699 8.00251 7.00301 8.00251ZM6.00363 12.9994C6.00363 12.4497 6.45335 12 7.00301 12C9.76128 12 11.9999 14.2386 11.9999 16.9969C11.9999 17.5465 11.5502 17.9963 11.0005 17.9963C10.4509 17.9963 10.0011 17.5465 10.0011 16.9969C10.0011 15.3379 8.66197 13.9988 7.00301 13.9988C6.45335 13.9988 6.00363 13.549 6.00363 12.9994ZM4.00488 17.9963C4.00488 16.8969 4.90432 15.9975 6.00363 15.9975C7.11294 15.9975 8.00238 16.8969 8.00238 17.9963C8.00238 19.0956 7.10295 19.995 6.00363 19.995C4.90432 19.995 4.00488 19.0956 4.00488 17.9963Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Signal.propTypes = propTypes;
Signal.defaultProps = defaultProps;

export default Signal;
