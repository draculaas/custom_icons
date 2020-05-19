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

const Calendar = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Calendar" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Calendar">
            <path
              id="calendar"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 7.5C16.1 7.5 16.5 7 16.5 6.5V5.5C16.5 4.9 16.1 4.5 15.5 4.5C14.9 4.5 14.5 4.9 14.5 5.5V6.5C14.5 7 14.9 7.5 15.5 7.5ZM18.5 5.5H17.5V6.5C17.5 7.6 16.6 8.5 15.5 8.5C14.4 8.5 13.5 7.6 13.5 6.5V5.5H10.5V6.5C10.5 7.6 9.6 8.5 8.5 8.5C7.4 8.5 6.5 7.6 6.5 6.5V5.5H5.5C4.9 5.5 4.5 6 4.5 6.5V18.5C4.5 19.1 4.9 19.5 5.5 19.5H18.5C19.1 19.5 19.5 19.1 19.5 18.5V6.5C19.5 5.9 19 5.5 18.5 5.5ZM6.5 17.5H9.5V14.5H6.5V17.5ZM9.5 13.5H6.5V10.5H9.5V13.5ZM10.5 17.5H13.5V14.5H10.5V17.5ZM13.5 13.5H10.5V10.5H13.5V13.5ZM14.5 17.5H17.5V14.5H14.5V17.5ZM17.5 13.5H14.5V10.5H17.5V13.5ZM9.5 6.5C9.5 7 9.1 7.5 8.5 7.5C7.9 7.5 7.5 7 7.5 6.5V5.5C7.5 4.9 7.9 4.5 8.5 4.5C9.1 4.5 9.5 4.9 9.5 5.5V6.5Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;
