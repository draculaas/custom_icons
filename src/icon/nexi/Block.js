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
        <Icon title="Block" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Block">
            <path
              id="error"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.00488 12C4.00488 7.58277 7.58265 4.005 11.9999 4.005C16.4171 4.005 19.9949 7.58277 19.9949 12C19.9949 16.4172 16.4171 19.995 11.9999 19.995C7.58265 19.995 4.00488 16.4172 4.00488 12ZM14.9955 8.00001C15.5452 8.00001 15.9949 8.44973 15.9949 8.99938C15.9949 9.27921 15.885 9.52905 15.7051 9.70894L13.4165 11.9975L15.7051 14.2861C15.885 14.466 15.9949 14.7158 15.9949 14.9956C15.9949 15.5453 15.5452 15.995 14.9955 15.995C14.7157 15.995 14.4658 15.8851 14.286 15.7052L11.9974 13.4166L9.70882 15.7052C9.52893 15.8851 9.27909 15.995 8.99926 15.995C8.4496 15.995 7.99989 15.5453 7.99989 14.9956C7.99989 14.7158 8.10982 14.466 8.2897 14.2861L10.5783 11.9975L8.2897 9.70894C8.10982 9.52905 7.99989 9.27921 7.99989 8.99938C7.99989 8.44973 8.4496 8.00001 8.99926 8.00001C9.27909 8.00001 9.52893 8.10994 9.70882 8.29982L11.9974 10.5884L14.286 8.28983C14.4658 8.10994 14.7157 8.00001 14.9955 8.00001Z"
              fill="#D34C4C"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Block;
