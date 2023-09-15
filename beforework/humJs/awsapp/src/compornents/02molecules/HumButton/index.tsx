import React, { FC, useContext } from "react";
import { SBarBottom, SBarCenter, SBarTop, SRegularButton } from "./style";
import { humContextVal } from "../../03organisms/Header";

type RegularButton = React.ComponentPropsWithoutRef<"button">;

const HumButton: FC<RegularButton> = ({ ...other }) => {
  const contextVal = useContext(humContextVal);
  if (!contextVal) {
    throw new Error("エラー発生");
  }
  const { status } = contextVal;

  return (
    <SRegularButton {...other}>
      <SBarTop status={status}/>
      <SBarCenter status={status}/>
      <SBarBottom status={status}/>
    </SRegularButton>
  )
};

export default HumButton;
