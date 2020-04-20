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

const Remove = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Remove" viewBox="0 0 14 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Remove</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M18.5,7.99750156 L5.5,7.99750156 C5.22,7.99750156 5,8.21736415 5,8.49718926 C5,8.77701437 5.22,8.99687695 5.5,8.99687695 L6,8.99687695 L6,18.9906309 C6,19.5402873 6.45,19.9900062 7,19.9900062 L17,19.9900062 C17.55,19.9900062 18,19.5402873 18,18.9906309 L18,8.99687695 L18.5,8.99687695 C18.78,8.99687695 19,8.77701437 19,8.49718926 C19,8.21736415 18.78,7.99750156 18.5,7.99750156 Z M10,16.9918801 C10,17.5415365 9.55,17.9912555 9,17.9912555 C8.45,17.9912555 8,17.5415365 8,16.9918801 L8,10.9956277 C8,10.4459713 8.45,9.99625234 9,9.99625234 C9.55,9.99625234 10,10.4459713 10,10.9956277 L10,16.9918801 Z M13,16.9918801 C13,17.5415365 12.55,17.9912555 12,17.9912555 C11.45,17.9912555 11,17.5415365 11,16.9918801 L11,10.9956277 C11,10.4459713 11.45,9.99625234 12,9.99625234 C12.55,9.99625234 13,10.4459713 13,10.9956277 L13,16.9918801 Z M16,16.9918801 C16,17.5415365 15.55,17.9912555 15,17.9912555 C14.45,17.9912555 14,17.5415365 14,16.9918801 L14,10.9956277 C14,10.4459713 14.45,9.99625234 15,9.99625234 C15.55,9.99625234 16,10.4459713 16,10.9956277 L16,16.9918801 Z M18,4.99937539 L14,4.99937539 C14,4.44971893 13.55,4 13,4 L11,4 C10.45,4 10,4.44971893 10,4.99937539 L6,4.99937539 C5.45,4.99937539 5,5.44909432 5,5.99875078 L5,6.99812617 L19,6.99812617 L19,5.99875078 C19,5.44909432 18.55,4.99937539 18,4.99937539 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2180.000000, -1795.000000)">
              <g id="Icons-/-Remove" transform="translate(2175.000000, 1791.000000)">
                <rect id="Rectangle-Copy-6" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="trash" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Remove.propTypes = propTypes;
Remove.defaultProps = defaultProps;

export default Remove;
