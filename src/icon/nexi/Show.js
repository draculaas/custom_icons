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

const Show = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Show" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Show">
            <path
              id="eye-open"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.965 11.9518V11.8818C19.9451 11.7418 19.8851 11.6218 19.7953 11.5218C19.2859 10.8518 18.6767 10.2618 18.0574 9.7218C16.7291 8.5518 15.211 7.5718 13.5431 7.1818C12.5743 6.9518 11.5955 6.9418 10.6367 7.1418C9.73783 7.3218 8.88889 7.6818 8.08989 8.1318C6.84145 8.8418 5.69288 9.8118 4.69413 10.9018C4.51436 11.1018 4.33458 11.3118 4.16479 11.5318C3.94507 11.8218 3.94507 12.1718 4.16479 12.4618C4.67416 13.1318 5.2834 13.7218 5.90262 14.2618C7.23096 15.4318 8.74906 16.4118 10.417 16.8018C11.3858 17.0318 12.3645 17.0418 13.3433 16.8418C14.2322 16.6618 15.0811 16.3018 15.8901 15.8518C17.1386 15.1418 18.2871 14.1718 19.2759 13.0818L19.2939 13.0618C19.4683 12.8678 19.6511 12.6645 19.8152 12.4518C19.9051 12.3518 19.965 12.2218 19.985 12.0918V11.9918C19.965 11.9718 19.965 11.9618 19.965 11.9518ZM11.995 10.9818C11.4457 10.9818 10.9963 11.4318 10.9963 11.9818C10.9963 12.5318 11.4457 12.9818 11.995 12.9818C12.5443 12.9818 12.9938 12.5318 12.9938 11.9818C12.9938 11.4318 12.5343 10.9818 11.995 10.9818ZM8.99875 11.9818C8.99875 13.6418 10.3371 14.9818 11.995 14.9818C13.6529 14.9818 14.9913 13.6418 14.9913 11.9818C14.9913 10.3218 13.6529 8.9818 11.995 8.9818C10.3371 8.9818 8.99875 10.3218 8.99875 11.9818Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Show.propTypes = propTypes;
Show.defaultProps = defaultProps;

export default Show;
