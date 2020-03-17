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

const Block = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Block" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 16V14C25.999 12.0128 24.8213 10.2149 23 9.42V4H11.46L5 11.55V28H21C24.3137 28 27 25.3137 27 22V16H26ZM20 22.11V24H22V22.11C22.4636 21.6954 22.6232 21.0377 22.4013 20.4567C22.1793 19.8757 21.6219 19.492 21 19.492C20.3781 19.492 19.8207 19.8757 19.5987 20.4567C19.3768 21.0377 19.5364 21.6954 20 22.11ZM24 16V14C24 12.3431 22.6569 11 21 11C19.3431 11 18 12.3431 18 14V16H24ZM7 12.29L12.38 6H21V9C18.2386 9 16 11.2386 16 14V16H15V22C15.0033 23.4775 15.5517 24.9018 16.54 26H7V12.29ZM21 26C23.2091 26 25 24.2091 25 22V18H17V22C17 24.2091 18.7909 26 21 26Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Block;
