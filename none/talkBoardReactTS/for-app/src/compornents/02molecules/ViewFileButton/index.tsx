import React, { FC, useState } from 'react'
import RegularText from '../../01atoms/RegularText'
import { StyleImage } from './style'
import { StyleButton } from './style'

type Props = {
  OpenOrClose? : boolean,
  upDateFileUrl: string,
}

const ViewFileButton:FC<Props> = (props) => {

  const [viewImageMaxOrMin, setViewImageMaxOrMin] = useState(false);

  const clickButtonEvent = () => {
    setViewImageMaxOrMin(!viewImageMaxOrMin);
  }

  return (
    <StyleButton onClick={clickButtonEvent}>
      <RegularText>画像を拡大表示する</RegularText>
      <StyleImage src={props.upDateFileUrl} MaxOrMin={viewImageMaxOrMin}/>
    </StyleButton>
  )
}

export default ViewFileButton