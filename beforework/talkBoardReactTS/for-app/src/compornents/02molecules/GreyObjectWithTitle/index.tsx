import React, { FC } from "react";
import FlexBox from "../../01atoms/FlexBox";
import GreyObject from "../../01atoms/GreyObject";
import TitleText from "../../01atoms/TitleText";
import { StyleFlexBox } from "./style";

type Props = {
  children: React.ReactNode;
};

const GreyObjectWithTitle: FC<Props> = ({ children }) => {
  return (
    <StyleFlexBox alignItems="center">
      <GreyObject />
      <TitleText tag={"h3"} fontSize="18px">
        {children}
      </TitleText>
    </StyleFlexBox>
  );
};

export default GreyObjectWithTitle;
