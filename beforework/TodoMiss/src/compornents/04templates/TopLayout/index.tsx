import React, { FC } from 'react'
import Header from '../../03organisms/Header'
import TodoInputForm from '../../03organisms/TodoInputForm'
import CompleteArea from '../../03organisms/CompleteArea'
import NotCompleteArea from '../../03organisms/NotCompleteArea'

const TopLayout:FC = () => {

  return (
    <div>
      <Header>今日もトレーニング</Header>
      <TodoInputForm />
      <NotCompleteArea />
      <CompleteArea />
    </div>
  )
}

export default TopLayout