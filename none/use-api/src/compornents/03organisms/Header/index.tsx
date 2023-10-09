import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <SHeader>API取扱トレーニング</SHeader>
  )
};

const SHeader = styled.header`
  line-height: 50px;
  font-size: 30px;
  padding: 0px 30px;
  font-weight: 500;
  border-bottom: 4px solid blue;
`

export default Header