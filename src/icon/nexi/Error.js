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

const Error = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Error" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Error</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M15.9975016,9.00187383 C15.9975016,8.45221736 15.5477826,8.00249844 14.9981262,8.00249844 C14.7183011,8.00249844 14.4684572,8.11242973 14.2885696,8.2923173 L12,10.5908807 L9.71143036,8.30231106 C9.53154279,8.11242973 9.28169894,8.00249844 9.00187383,8.00249844 C8.45221736,8.00249844 8.00249844,8.45221736 8.00249844,9.00187383 C8.00249844,9.28169894 8.11242973,9.53154279 8.2923173,9.71143036 L10.5808869,12 L8.2923173,14.2885696 C8.11242973,14.4684572 8.00249844,14.7183011 8.00249844,14.9981262 C8.00249844,15.5477826 8.45221736,15.9975016 9.00187383,15.9975016 C9.28169894,15.9975016 9.53154279,15.8875703 9.71143036,15.7076827 L12,13.4191131 L14.2885696,15.7076827 C14.4684572,15.8875703 14.7183011,15.9975016 14.9981262,15.9975016 C15.5477826,15.9975016 15.9975016,15.5477826 15.9975016,14.9981262 C15.9975016,14.7183011 15.8875703,14.4684572 15.7076827,14.2885696 L13.4191131,12 L15.7076827,9.71143036 C15.8875703,9.53154279 15.9975016,9.28169894 15.9975016,9.00187383 L15.9975016,9.00187383 Z M12,4.00499688 C7.58276077,4.00499688 4.00499688,7.58276077 4.00499688,12 C4.00499688,16.4172392 7.58276077,19.9950031 12,19.9950031 C16.4172392,19.9950031 19.9950031,16.4172392 19.9950031,12 C19.9950031,7.58276077 16.4172392,4.00499688 12,4.00499688 Z M12,17.9962523 C8.69206746,17.9962523 6.00374766,15.3079325 6.00374766,12 C6.00374766,8.69206746 8.69206746,6.00374766 12,6.00374766 C15.3079325,6.00374766 17.9962523,8.69206746 17.9962523,12 C17.9962523,15.3079325 15.3179263,17.9962523 12,17.9962523 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1899.000000, -1795.000000)">
              <g id="Icons-/-Error" transform="translate(1895.000000, 1791.000000)">
                <rect id="Rectangle-Copy-2" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="delete" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
