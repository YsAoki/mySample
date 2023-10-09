import React, { FC } from 'react'
import FlexBox from '../../01atoms/FlexBox'
import { styled } from 'styled-components'

type TextProps = {
  userId?: number,
  id?: number,
  title?: string,
  body?: string,
}


const Card:FC<TextProps> = ({userId, id, title, body}) => {
  return (
    <SFlexbox flexDirection='column' padding='8px' margin='0 0 10px' key={userId}>
      <p>userID: {id}</p>
      <p>title: {title}</p>
      <p>comment: {body}</p>
    </SFlexbox>
  )
}

const SFlexbox = styled(FlexBox)`
  border: 2px solid blue;
  width: 300px;
`

export default Card