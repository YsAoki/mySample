import React, { FC } from 'react'
import { StylePageLink } from './style'

type Props = {
  children: React.ReactNode,
  to: string,
}

export type StyleProps = {
  margin?: string;
  color?: string;
  fontSize?: string;
  textDecoration?: string;
}

const PageLink:FC<Props & StyleProps> = ({ children, to, ...prop }) => {
  return (
    <StylePageLink to={to} {...prop}>{children}</StylePageLink>
  )
}

export default PageLink