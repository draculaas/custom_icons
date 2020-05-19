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

const Lock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Lock" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Lock">
            <path
              id="lock"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 11H17.96C18.51 11 19 11.35 19 11.9V18.81C19 19.35 18.51 20 17.96 20H5.96C5.41 20 5 19.35 5 18.81V11.9C5 11.35 5.41 11 5.96 11H8V7.95C8 5.77 9.79 4 12 4C14.21 4 16 5.77 16 7.95V11ZM10 7.95V11H14V7.95C14 6.86 13.1 5.98 12 5.98C10.9 5.98 10 6.86 10 7.95Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

export default Lock;
