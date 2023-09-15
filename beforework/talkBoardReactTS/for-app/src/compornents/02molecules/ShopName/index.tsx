import React, { Children, FC } from 'react'
import TitleText from '../../01atoms/TitleText'

type Props = {
  children: React.ReactNode;
}

type StyleProps = {
  margin?: string;
}

const ShopName:FC<Props & StyleProps> = ({ children, ...prop }) => {
  return (
    <TitleText tag='h4' fontSize='16px' fontWeight={500} {...prop}>{children}</TitleText>
  )
}

export default ShopName