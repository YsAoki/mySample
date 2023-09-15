import React from 'react'
import { styled } from 'styled-components'
import TitleText from '../../01atoms/TitleText'
import { useSelector } from 'react-redux'
import TodoCard from '../../02molecules/TodoCard'
import { Todo } from '../../../store/todoSlice'

const CompleteArea = () => {
  const TodoList = useSelector((state:any) => state.todo.todoList);

  // statusがfalseのTodoのみをフィルタリング
  const incompleteTasks = TodoList.filter((task: { status: boolean }) => task.status === false);

  return (
    <SBox>
      <STitleText tag='h2'>完了タスク</STitleText>
      {incompleteTasks.map((todo: Todo, index: number) => (
        <TodoCard key={index} {...todo} />
      ))}
    </SBox>
  );
}

export default CompleteArea

export const SBox = styled.div`
  display: flex;
  flex-direction: column;
`
const STitleText = styled(TitleText)`
  text-align: center;
`