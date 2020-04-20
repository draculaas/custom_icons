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

const Inprogress = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Inprogress" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / In progress</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4 C7.58,4 4,7.58 4,12 C4,16.42 7.58,20 12,20 C16.42,20 20,16.42 20,12 C20,7.58 16.42,4 12,4 Z M12,18 C8.69,18 6,15.31 6,12 C6,8.69 8.69,6 12,6 C15.31,6 18,8.69 18,12 C18,15.31 15.31,18 12,18 Z M13,11.59 L13,8 C13,7.45 12.55,7 12,7 C11.45,7 11,7.45 11,8 L11,12 C11,12.28 11.11,12.53 11.29,12.71 L13.29,14.71 C13.47,14.89 13.72,15 14,15 C14.55,15 15,14.55 15,14 C15,13.72 14.89,13.47 14.71,13.29 L13,11.59 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1859.000000, -1795.000000)">
              <g id="Icons-/-In-progress" transform="translate(1855.000000, 1791.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="time" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Inprogress.propTypes = propTypes;
Inprogress.defaultProps = defaultProps;

export default Inprogress;
