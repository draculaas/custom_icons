import styled from 'styled-components';
import { KIND } from '../constants';

const getStyleForKind = ({ theme, kind }) => {
  switch (kind) {
    case KIND.primary:
      return {
        fill: theme.colors.white,
        color: theme.colors.white,
      };
    case KIND.secondary:
      return {
        fill: theme.colors.accent,
        color: theme.colors.accent,
      };
    case KIND.minimal:
      return {
        fill: theme.colors.notActiveRadio,
        color: theme.colors.notActiveRadio,
      };
    case KIND.third:
      return {
        fill: theme.colors.blackThree,
        color: theme.colors.blackThree,
      };
    case KIND.tertiary:
      return {
        fill: 'none',
        color: 'none',
      };
    default:
      return {
        fill: 'inherit',
        color: 'inherit',
        ':hover': {
          color: 'inherit',
          fill: 'inherit',
        },
      };
  }
};

const StyledSvg = styled.svg`
  flex-shrink: 0;
  display: inline-block;
  ${getStyleForKind};
`;

export default StyledSvg;
