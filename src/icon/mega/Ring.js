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

const Ring = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Ring" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path d="M19.2727 25.8173H12.7273V27.9991H19.2727V25.8173Z" fill="#333333" />
          <path
            d="M23.6365 17.8218L22.2947 11.3418C21.768 8.74403 19.7025 6.73483 17.0911 6.28002V4H14.9092V6.28002C12.2979 6.73483 10.2324 8.74403 9.7056 11.3419L8.36378 17.8219L5.50562 23.6364H26.4947L23.6365 17.8218ZM11.6365 11.7673C12.1141 9.71792 13.8979 8.23737 16.0001 8.14542C18.1024 8.23732 19.8862 9.71792 20.3638 11.7673L21.4547 17.0909H10.5456L11.6365 11.7673ZM8.82196 21.4545L9.91286 19.2727H22.0874L23.1783 21.4545H8.82196V21.4545Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Ring.propTypes = propTypes;
Ring.defaultProps = defaultProps;

export default Ring;
