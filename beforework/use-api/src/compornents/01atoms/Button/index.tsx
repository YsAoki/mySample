import React, { FC } from 'react'
import { styled } from 'styled-components'
import { buttonType } from '../../../types/deafaultTypes'
import { oftenType } from '../../../types/myTypes'

const Button:FC<buttonType & oftenType> = ({ children, ...other }) => {
  return (
    <SButton {...other}>{children}</SButton>
  )
}

const SButton = styled.button`
  cursor: pointer;
`

export default Button