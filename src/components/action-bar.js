import * as React from "react";
import styled from "styled-components";

import { Like, SuperLike, Ignore } from "./icons";
import { CicleButton } from "./circle-button";

export const ActionBar = () => (
  <React.Fragment>
    <svg height={0} width={0}>
      <defs>
        <linearGradient
          id="svg-fill-linear__nope"
          x1="0"
          x2="0.7071067811865475"
          y1="0.7071067811865476"
          y2="0"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#ff7854" />
          <stop offset="100%" stopColor="#fd267d" />
        </linearGradient>
        <linearGradient
          id="svg-fill-linear__super-like"
          x1="0"
          x2="0.7071067811865475"
          y1="0.7071067811865476"
          y2="0"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#08d0ff" />
          <stop offset="100%" stopColor="#3ca4ff" />
        </linearGradient>
        <linearGradient
          id="svg-fill-linear__like"
          x1="0"
          x2="0.7071067811865475"
          y1="0.7071067811865476"
          y2="0"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#7cf4f5" />
          <stop offset="100%" stopColor="#01df8a" />
        </linearGradient>
      </defs>
    </svg>
    <ActionBarWrapper>
      <ActionButtonWrapper>
        <CicleButton small>
          <Ignore />
        </CicleButton>

      </ActionButtonWrapper>
      <ActionButtonWrapper>
        <CicleButton>
          <SuperLike />
        </CicleButton>

      </ActionButtonWrapper>
      <ActionButtonWrapper>
        <CicleButton small>
          <Like />
        </CicleButton>
        
      </ActionButtonWrapper>
    </ActionBarWrapper>
  </React.Fragment>
);

const ActionBarWrapper = styled.div`
  display: flex;

  width: 100%;

  @media (min-width: 768px) {
    width: 375px;
  }

  padding-top: 25px;
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 8px;
`;
