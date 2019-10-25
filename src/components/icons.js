import styled from "styled-components";

import {
  Home as RawHome,
  List as RawList,
  Heart,
  Star,
  X,
} from "styled-icons/feather";

export const Like = styled(Heart)`
  fill: url(#svg-fill-linear__like);
  stroke: none;

  position: relative;
  top: 3px;
`;

export const Ignore = styled(X)`
  stroke: url(#svg-fill-linear__nope);
  stroke-width: 5;
`;

export const SuperLike = styled(Star)`
  fill: url(#svg-fill-linear__super-like);
  stroke: none;
`;

const makeSwitcherIcon = icon => styled(icon).attrs({
  size: 24,
})`
  stroke: ${props => (props.active ? "#46aef7" : "#8b919a")};
`;

export const Home = makeSwitcherIcon(RawHome);
export const List = makeSwitcherIcon(RawList);
