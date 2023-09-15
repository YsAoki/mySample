import React from 'react'
import { StyleHeader } from './style'
import HeaderLogo from '../../02molecules/HeaderLogo'
import HeaderLinkArea from '../../02molecules/HeaderLinkArea'
import { StyleInner } from './style'

const Header = () => {
  return (
    <StyleHeader>
      <StyleInner width='1000px'>
        <HeaderLogo />
        <HeaderLinkArea />
      </StyleInner>
    </StyleHeader>
  )
}

export default Header