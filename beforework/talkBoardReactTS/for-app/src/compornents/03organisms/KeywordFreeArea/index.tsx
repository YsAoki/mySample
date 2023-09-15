import React, { FC, useState } from 'react'
import { StyleForm, StyleKeywordFreeArea } from './style'
import GreyObjectWithTitle from '../../02molecules/GreyObjectWithTitle'
import RegularText from '../../01atoms/RegularText'
import FlexBox from '../../01atoms/FlexBox'
import Input from '../../01atoms/Input'
import Button from '../../01atoms/Button'

const KeywordFreeArea:FC = () => {

  const [input, setInput] = useState("");

  const onSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    alert(input);
  }

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <StyleKeywordFreeArea>
      <GreyObjectWithTitle>掲示板検索
      </GreyObjectWithTitle>
      <StyleForm onSubmit={onSubmitEvent}>
        <RegularText fontSize='14px' margin='0 0 6px'>検索したいキーワードを入力</RegularText>
        <FlexBox justifyContent='space-between'>
          <Input width='383px' height="32px" fontSize='12px' padding='0 0 0 12px' placeholder='例) 楽しい　あの日' onChange={onChangeEvent} value={input}/>
          <Button>検索</Button>
        </FlexBox>
      </StyleForm>
    </StyleKeywordFreeArea>
  )
}

export default KeywordFreeArea