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

const Signal = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Signal" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Signal</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M6.00374766,15.9975016 C4.90443473,15.9975016 4.00499688,16.8969394 4.00499688,17.9962523 C4.00499688,19.0955653 4.90443473,19.9950031 6.00374766,19.9950031 C7.10306059,19.9950031 8.00249844,19.0955653 8.00249844,17.9962523 C8.00249844,16.8969394 7.11305434,15.9975016 6.00374766,15.9975016 Z M7.00312305,12 C6.45346658,12 6.00374766,12.4497189 6.00374766,12.9993754 C6.00374766,13.5490319 6.45346658,13.9987508 7.00312305,13.9987508 C8.6620862,13.9987508 10.0012492,15.3379138 10.0012492,16.996877 C10.0012492,17.5465334 10.4509681,17.9962523 11.0006246,17.9962523 C11.5502811,17.9962523 12,17.5465334 12,16.996877 C12,14.2386009 9.76139913,12 7.00312305,12 Z M7.00312305,8.00249844 C6.45346658,8.00249844 6.00374766,8.45221736 6.00374766,9.00187383 C6.00374766,9.55153029 6.45346658,10.0012492 7.00312305,10.0012492 C10.8707058,10.0012492 13.9987508,13.1292942 13.9987508,16.996877 C13.9987508,17.5465334 14.4484697,17.9962523 14.9981262,17.9962523 C15.5477826,17.9962523 15.9975016,17.5465334 15.9975016,16.996877 C15.9975016,12.0299813 11.9700187,8.00249844 7.00312305,8.00249844 Z M7.00312305,4.00499688 C6.45346658,4.00499688 6.00374766,4.4547158 6.00374766,5.00437227 C6.00374766,5.55402873 6.45346658,6.00374766 7.00312305,6.00374766 C13.0793254,6.00374766 17.9962523,10.9206746 17.9962523,16.996877 C17.9962523,17.5465334 18.4459713,17.9962523 18.9956277,17.9962523 C19.5452842,17.9962523 19.9950031,17.5465334 19.9950031,16.996877 C19.9950031,9.82136165 14.1786384,4.00499688 7.00312305,4.00499688 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2179.000000, -1916.000000)">
              <g id="Icons-/-Signal" transform="translate(2175.000000, 1912.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="feed" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Signal.propTypes = propTypes;
Signal.defaultProps = defaultProps;

export default Signal;
