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

const Attention = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Attention" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Attention</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,20 C7.5817,20 4,16.4183 4,12 C4,7.5817 7.5817,4 12,4 C16.4183,4 20,7.5817 20,12 C20,16.4183 16.4183,20 12,20 Z M12,18 C15.3137,18 18,15.3137 18,12 C18,8.6863 15.3137,6 12,6 C8.6863,6 6,8.6863 6,12 C6,15.3137 8.6863,18 12,18 Z M13,16 L11,16 L11,14 L13,14 L13,16 Z M13,13 L11,13 L11,8 L13,8 L13,13 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1939.000000, -1795.000000)">
              <g id="Icons-/-Attention" transform="translate(1935.000000, 1791.000000)">
                <rect id="Rectangle-Copy" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="issue" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Attention.propTypes = propTypes;
Attention.defaultProps = defaultProps;

export default Attention;
