import React from 'react'
import { StyleFlexBox } from './style'
import RegularText from '../../01atoms/RegularText'

const NoPhoto = () => {
  return (
    <StyleFlexBox flexDirection='column' justifyContent='space-between'>
      <RegularText fontSize='31px' color='#FFF'>NO</RegularText>
      <RegularText fontSize='31px' color='#FFF'>PHOTO</RegularText>
    </StyleFlexBox>
  )
}

export default NoPhoto