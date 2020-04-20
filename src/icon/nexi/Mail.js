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
        <Icon title="Mail" viewBox="0 0 16 12" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Mail</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M4,7.06 L4,16.94 L8.94,12 L4,7.06 Z M18.94,6 L5.06,6 L12,12.94 L18.94,6 Z M12.53,14.53 C12.39,14.67 12.21,14.75 12,14.75 C11.79,14.75 11.61,14.67 11.47,14.53 L10,13.06 L5.06,18 L18.94,18 L14,13.06 L12.53,14.53 L12.53,14.53 Z M15.06,12 L20,16.94 L20,7.06 L15.06,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2219.000000, -1877.000000)">
              <g id="Icons-/-Mail" transform="translate(2215.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="envelope" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Mail.propTypes = propTypes;
Mail.defaultProps = defaultProps;

export default Mail;
