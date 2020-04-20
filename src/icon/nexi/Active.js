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

const Active = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Active" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Active</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,20 C7.58,20 4,16.42 4,12 C4,7.58 7.58,4 12,4 C16.42,4 20,7.58 20,12 C20,16.42 16.42,20 12,20 Z M16,9 C15.72,9 15.47,9.11 15.29,9.29 L11,13.59 L8.71,11.29 C8.53,11.11 8.28,11 8,11 C7.45,11 7,11.45 7,12 C7,12.28 7.11,12.53 7.29,12.71 L10.29,15.71 C10.47,15.89 10.72,16 11,16 C11.28,16 11.53,15.89 11.71,15.71 L16.71,10.71 C16.89,10.53 17,10.28 17,10 C17,9.45 16.55,9 16,9 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1859.000000, -1955.000000)">
              <g id="Icons-/-Active" transform="translate(1855.000000, 1951.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="tick-circle" fill="#00AD21" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Active.propTypes = propTypes;
Active.defaultProps = defaultProps;

export default Active;
