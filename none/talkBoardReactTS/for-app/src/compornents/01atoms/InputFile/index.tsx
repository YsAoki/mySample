import React, { FC } from "react";
import { StyleInputFile, StyleLabel } from "./style";

type StandardInputFile = React.ComponentPropsWithoutRef<"input">;

const InputFile: FC<StandardInputFile> = (props) => {
  return (
    <StyleLabel>
      <StyleInputFile type="file" {...props} />ファイルを選択する
    </StyleLabel>
  );
};

export default InputFile;
