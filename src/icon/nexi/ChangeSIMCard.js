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

const ChangeSIMCard = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ChangeSIMCard" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Change SIM-card">
            <path
              id="refresh"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9961 5.00438C17.9961 4.45472 18.4459 4.005 18.9955 4.005C19.5452 4.005 19.9949 4.45472 19.9949 5.00438V9.00188C19.9949 9.55154 19.5452 10.0013 18.9955 10.0013H14.998C14.4484 10.0013 13.9986 9.55154 13.9986 9.00188C13.9986 8.45223 14.4484 8.00251 14.998 8.00251H16.4571C15.3578 6.78327 13.7688 6.00376 11.9999 6.00376C8.69195 6.00376 6.00363 8.69208 6.00363 12C6.00363 12.5497 5.55391 12.9994 5.00426 12.9994C4.4546 12.9994 4.00488 12.5497 4.00488 12C4.00488 7.58277 7.58265 4.005 11.9999 4.005C14.3984 4.005 16.5371 5.07434 17.9961 6.74329V5.00438ZM17.9961 12C17.9961 11.4504 18.4459 11.0006 18.9955 11.0006C19.5452 11.0006 19.9949 11.4504 19.9949 12C19.9949 16.4172 16.4171 19.995 11.9999 19.995C9.60139 19.995 7.46272 18.9257 6.00363 17.2567V18.9956C6.00363 19.5453 5.55391 19.995 5.00426 19.995C4.4546 19.995 4.00488 19.5453 4.00488 18.9956V14.9981C4.00488 14.4485 4.4546 13.9988 5.00426 13.9988H9.00176C9.55142 13.9988 10.0011 14.4485 10.0011 14.9981C10.0011 15.5478 9.55142 15.9975 9.00176 15.9975H7.54267C8.64198 17.2167 10.231 17.9963 11.9999 17.9963C15.3078 17.9963 17.9961 15.3079 17.9961 12Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ChangeSIMCard.propTypes = propTypes;
ChangeSIMCard.defaultProps = defaultProps;

export default ChangeSIMCard;
