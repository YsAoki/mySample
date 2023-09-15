import React, { FC } from "react";
import FlexBox from "../FlexBox";
import RegularText from "../RegularText";

type Props = {
  points: number;
};

const HeartsAndPoints: FC<Props> = ({ points }) => {
  const heartsLimit = 5;

  const goodHearts = Array(points).fill("★");

  const badHearts = Array(heartsLimit - points).fill("☆");

  return (
    <FlexBox>
      {goodHearts.map((heart, index) => (
        <RegularText key={index}>{heart}</RegularText>
      ))}
      {badHearts.map((heart, index) => (
        <RegularText key={index}>{heart}</RegularText>
      ))}
      <RegularText>({points})</RegularText>
    </FlexBox>
  );
};

export default HeartsAndPoints;
