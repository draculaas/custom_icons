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

const SortAsc = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SortAsc" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Sort-asc</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,10.5 L15,10.5 C15.55,10.5 16,10.05 16,9.5 C16,8.95 15.55,8.5 15,8.5 L12,8.5 C11.45,8.5 11,8.95 11,9.5 C11,10.05 11.45,10.5 12,10.5 Z M12,6.5 L13,6.5 C13.55,6.5 14,6.05 14,5.5 C14,4.95 13.55,4.5 13,4.5 L12,4.5 C11.45,4.5 11,4.95 11,5.5 C11,6.05 11.45,6.5 12,6.5 Z M12,14.5 L17,14.5 C17.55,14.5 18,14.05 18,13.5 C18,12.95 17.55,12.5 17,12.5 L12,12.5 C11.45,12.5 11,12.95 11,13.5 C11,14.05 11.45,14.5 12,14.5 Z M9,15.5 C8.72,15.5 8.47,15.61 8.29,15.79 L8,16.09 L8,12.5 C8,11.95 7.55,11.5 7,11.5 C6.45,11.5 6,11.95 6,12.5 L6,16.09 L5.71,15.8 C5.53,15.61 5.28,15.5 5,15.5 C4.45,15.5 4,15.95 4,16.5 C4,16.78 4.11,17.03 4.29,17.21 L6.29,19.21 C6.47,19.39 6.72,19.5 7,19.5 C7.28,19.5 7.53,19.39 7.71,19.21 L9.71,17.21 C9.89,17.03 10,16.78 10,16.5 C10,15.95 9.55,15.5 9,15.5 Z M19,16.5 L12,16.5 C11.45,16.5 11,16.95 11,17.5 C11,18.05 11.45,18.5 12,18.5 L19,18.5 C19.55,18.5 20,18.05 20,17.5 C20,16.95 19.55,16.5 19,16.5 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1899.000000, -1915.000000)">
              <g id="Icons-/-Sort-asc" transform="translate(1895.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="sort-asc" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SortAsc.propTypes = propTypes;
SortAsc.defaultProps = defaultProps;

export default SortAsc;
