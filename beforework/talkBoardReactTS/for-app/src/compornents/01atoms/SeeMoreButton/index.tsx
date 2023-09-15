import React, { FC } from 'react'
import { StyleSeeMoreButton } from './style'

type Props = {
  to: string,
}

const SeeMoreButton:FC<Props> = ({ to }) => {
  return (
    <StyleSeeMoreButton to={to}>もっと見る</StyleSeeMoreButton>
  )
}

export default SeeMoreButton