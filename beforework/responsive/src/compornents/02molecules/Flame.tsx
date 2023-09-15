import React, { FC } from 'react'

type props = {
  children: React.ReactNode,
}

const Flame:FC<props> = ( {children} ) => {
  return (
    <div>{children}</div>
  )
}

export default Flame