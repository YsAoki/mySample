import React, { useEffect, useState } from "react";
import { SFlexBox, SText } from "./style";
import FlexBox from "../../01atoms/FlexBox";

const Watch = () => {
  const [date, setDate] = useState<string>("");

  const weekday = ["日", "月", "火", "水", "木", "金", "土"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const d = new Date();
      const year = d.getFullYear();
      const month = (d.getMonth() + 1).toString().padStart(2, "0");
      const day = d.getDate().toString().padStart(2, "0");
      const dayOfWeek = d.getDay();

      setDate(`${year}年${month}月${day}日(${weekday[dayOfWeek]})`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <SFlexBox>
        <SText>{date}</SText>
      </SFlexBox>
    </>
  );
};

export default Watch;
