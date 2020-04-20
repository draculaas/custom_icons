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

const UnknownBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="UnknownBlock" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Unknown block</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4.00499688 C7.58276077,4.00499688 4.00499688,7.58276077 4.00499688,12 C4.00499688,16.4172392 7.58276077,19.9950031 12,19.9950031 C16.4172392,19.9950031 19.9950031,16.4172392 19.9950031,12 C19.9950031,7.58276077 16.4172392,4.00499688 12,4.00499688 Z M12.9993754,15.99 L11.0006246,15.99 L11.0006246,13.99 L12.9993754,13.99 L12.9993754,15.99 Z M12.9993754,12.99 L11.0006246,12.99 L11.0006246,7.99 L12.9993754,7.99 L12.9993754,12.99 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2059.000000, -1955.000000)">
              <g id="Icons-/-Unknown-block" transform="translate(2055.000000, 1951.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="error" fill="#D34C4C" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

UnknownBlock.propTypes = propTypes;
UnknownBlock.defaultProps = defaultProps;

export default UnknownBlock;
