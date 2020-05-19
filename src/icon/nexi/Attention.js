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
        <Icon title="Attention" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Attention">
            <path
              id="issue"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 12C4 16.4183 7.5817 20 12 20C16.4183 20 20 16.4183 20 12C20 7.5817 16.4183 4 12 4C7.5817 4 4 7.5817 4 12ZM18 12C18 15.3137 15.3137 18 12 18C8.6863 18 6 15.3137 6 12C6 8.6863 8.6863 6 12 6C15.3137 6 18 8.6863 18 12ZM11 16V14H13V16H11ZM11 8V13H13V8H11Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Attention.propTypes = propTypes;
Attention.defaultProps = defaultProps;

export default Attention;
