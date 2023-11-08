import React from 'react'
import { SHeader, SInner, STitleText } from './style'
import Watch from '../../02molecules/Watch.tsx'

const Header = () => {
  return (
    <>
      <SHeader>
        <SInner>
          <STitleText tag='h1'>マイ制作物</STitleText>
          <Watch />
        </SInner>
      </SHeader>
    </>
  )
}

export default Header