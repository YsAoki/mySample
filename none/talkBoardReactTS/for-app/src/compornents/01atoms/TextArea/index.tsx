import React, { FC } from 'react'
import { StyleTextArea } from './style';

type StandardTextArea = Omit<React.ComponentProps<"textarea">, "ref" | "key">;

export type StyleProps = {
  margin?: string,
  padding?: string,
  fontSize?: string,
}


const TextArea:FC<StyleProps & StandardTextArea> = (props) => {
  return (
    <StyleTextArea {...props}/>
  )
}

export default TextArea