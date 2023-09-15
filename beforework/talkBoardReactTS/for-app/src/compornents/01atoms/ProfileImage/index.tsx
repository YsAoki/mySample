import React, { FC } from 'react'
import { StyleImage } from './style'

type StandardImageProps = Omit<React.ComponentProps<"img">, "ref" | "key">

const ProfileImage:FC<StandardImageProps> = (props) => {
  return (
    <StyleImage {...props}/>
  )
}

export default ProfileImage