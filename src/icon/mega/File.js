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

const File = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="File" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / File">
            <path
              id="document"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 4H13L18 9V19C18 19.55 17.55 20 17 20H7C6.45 20 6 19.55 6 19V5C6 4.45 6.45 4 7 4ZM8 6V18H16V10H12V6H8Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;
