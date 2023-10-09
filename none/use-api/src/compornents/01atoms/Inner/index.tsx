import React, { FC } from 'react'
import { styled } from 'styled-components';

type props = {
  children: React.ReactNode;
}

const Inner:FC<props> = (props) => {
  return (
    <SInner>{props.children}</SInner>
  )
}

const SInner = styled.div`
  width: 1400px;
  padding: 20px;
  margin: 0 auto;
`;

export default Inner