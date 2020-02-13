
import * as React from 'react';
import {getOverrides} from '../helpers/overrides.js';
import {Svg as StyledSvg} from './styled-components.js';

export default function Icon(props) {
  const {children, title, overrides = {}, size, color, ...restProps} = props;

  const sharedProps = {
    $size: size,
    $color: color,
  };

  const [Svg, overrideProps] = getOverrides(overrides.Svg, StyledSvg);

  return (
    <Svg data-baseweb="icon" {...restProps} {...sharedProps} {...overrideProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </Svg>
  );
}
