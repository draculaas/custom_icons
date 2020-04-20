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
        <Icon title="Calendar" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Calendar</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M15.5,7.5 C16.1,7.5 16.5,7 16.5,6.5 L16.5,5.5 C16.5,4.9 16.1,4.5 15.5,4.5 C14.9,4.5 14.5,4.9 14.5,5.5 L14.5,6.5 C14.5,7 14.9,7.5 15.5,7.5 Z M18.5,5.5 L17.5,5.5 L17.5,6.5 C17.5,7.6 16.6,8.5 15.5,8.5 C14.4,8.5 13.5,7.6 13.5,6.5 L13.5,5.5 L10.5,5.5 L10.5,6.5 C10.5,7.6 9.6,8.5 8.5,8.5 C7.4,8.5 6.5,7.6 6.5,6.5 L6.5,5.5 L5.5,5.5 C4.9,5.5 4.5,6 4.5,6.5 L4.5,18.5 C4.5,19.1 4.9,19.5 5.5,19.5 L18.5,19.5 C19.1,19.5 19.5,19.1 19.5,18.5 L19.5,6.5 C19.5,5.9 19,5.5 18.5,5.5 Z M9.5,17.5 L6.5,17.5 L6.5,14.5 L9.5,14.5 L9.5,17.5 Z M9.5,13.5 L6.5,13.5 L6.5,10.5 L9.5,10.5 L9.5,13.5 Z M13.5,17.5 L10.5,17.5 L10.5,14.5 L13.5,14.5 L13.5,17.5 Z M13.5,13.5 L10.5,13.5 L10.5,10.5 L13.5,10.5 L13.5,13.5 Z M17.5,17.5 L14.5,17.5 L14.5,14.5 L17.5,14.5 L17.5,17.5 Z M17.5,13.5 L14.5,13.5 L14.5,10.5 L17.5,10.5 L17.5,13.5 Z M8.5,7.5 C9.1,7.5 9.5,7 9.5,6.5 L9.5,5.5 C9.5,4.9 9.1,4.5 8.5,4.5 C7.9,4.5 7.5,4.9 7.5,5.5 L7.5,6.5 C7.5,7 7.9,7.5 8.5,7.5 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2259.000000, -1835.000000)">
              <g id="Icons-/-Calendar" transform="translate(2255.000000, 1831.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="calendar" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;
