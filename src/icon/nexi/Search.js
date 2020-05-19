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

const Search = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Search" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Search">
            <path
              id="search"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.8868 14.7583L19.5552 17.4366C19.825 17.7064 19.9949 18.0862 19.9949 18.4959C19.9949 19.3254 19.3253 19.995 18.4958 19.995C18.0861 19.995 17.7063 19.8251 17.4365 19.5553L14.7582 16.887C13.6788 17.5765 12.3896 17.9963 11.0005 17.9963C7.13293 17.9963 4.00488 14.8682 4.00488 11.0006C4.00488 7.13305 7.13293 4.005 11.0005 4.005C14.8681 4.005 17.9961 7.13305 17.9961 11.0006C17.9961 12.3798 17.5864 13.669 16.8868 14.7583ZM6.00363 11.0006C6.00363 13.7589 8.24223 15.9975 11.0005 15.9975C13.7588 15.9975 15.9974 13.7589 15.9974 11.0006C15.9974 8.24236 13.7588 6.00376 11.0005 6.00376C8.24223 6.00376 6.00363 8.24236 6.00363 11.0006Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
