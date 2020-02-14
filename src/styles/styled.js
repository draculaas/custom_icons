import * as React from "react";
import {
  createStyled,
  withStyle as styletronWithStyle,
  useStyletron as styletronUseStyletron
} from "styletron-react";
import { driver, getInitialStyle } from "styletron-standard";

const wrapper = StyledComponent => {
  return React.forwardRef((props, ref) => (
    <>{theme => <StyledComponent ref={ref} {...props} $theme={theme} />}</>
  ));
};

export function createThemedStyled() {
  return createStyled({
    wrapper,
    getInitialStyle,
    driver
  });
}

export const styled = createThemedStyled();
