import React from 'react'
import { SBox } from '../CompleteArea'
import TitleText from '../../01atoms/TitleText'
import { styled } from 'styled-components'

const NotCompleteArea = () => {
  return (
    <SBox>
      <STitleText tag='h2'>未完了タスク</STitleText>
    </SBox>
  )
}

export default NotCompleteArea

const STitleText = styled(TitleText)`
  text-align: center;
`
