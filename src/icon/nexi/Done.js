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

const Done = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Done" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Done</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4.00499688 C7.58276077,4.00499688 4.00499688,7.58276077 4.00499688,12 C4.00499688,16.4172392 7.58276077,19.9950031 12,19.9950031 C16.4172392,19.9950031 19.9950031,16.4172392 19.9950031,12 C19.9950031,7.58276077 16.4172392,4.00499688 12,4.00499688 Z M12.0012492,17.9975016 C8.69331668,17.9975016 6.00499688,15.3091818 6.00499688,12.0012492 C6.00499688,8.69331668 8.69331668,6.00499688 12.0012492,6.00499688 C15.3091818,6.00499688 17.9975016,8.69331668 17.9975016,12.0012492 C17.9975016,15.3091818 15.3191755,17.9975016 12.0012492,17.9975016 Z M15.7349969,10.7047313 L11.7249969,14.7141048 C11.5449969,14.8940767 11.2949969,15.0040595 11.0149969,15.0040595 C10.7349969,15.0040595 10.4849969,14.8940767 10.3049969,14.7141048 L8.30499688,12.7144173 C8.12499688,12.524447 8.00499688,12.274486 8.00499688,12.0045282 C8.00499688,11.4546141 8.45499688,11.0046844 9.00499688,11.0046844 C9.28499688,11.0046844 9.53499688,11.1146672 9.71499688,11.2946391 L11.0149969,12.594436 L14.3149969,9.29495157 C14.4949969,9.11497969 14.7449969,9.00499688 15.0249969,9.00499688 C15.5749969,9.00499688 16.0249969,9.45492658 16.0249969,10.0048407 C16.0349969,10.2747985 15.9149969,10.5247594 15.7349969,10.7047313 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1979.000000, -1795.000000)">
              <g id="Icons-/-Done" transform="translate(1975.000000, 1791.000000)">
                <rect id="Rectangle-Copy-2" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="add" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Done.propTypes = propTypes;
Done.defaultProps = defaultProps;

export default Done;
