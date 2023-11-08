import React, { FC } from "react";
import { SInner, SText } from "./style";
import { GetLocationTypes } from "../../../types/getLocationTypes";
import { convertStatusNumForString } from "../../../hooks/convertStatus";
import { convertKindsNumberForString } from "../../../hooks/convertKinds";
import ConvertNumIcon from "../convertNumIcon";
import { convertViewDate } from "../../../hooks/convertViewDate";
import Tag from "../../01atoms/Tag";

type Props = {
  locationData: GetLocationTypes;
};


const LocationCard: FC<Props> = ({ locationData }) => {
  console.log(convertKindsNumberForString(locationData.kinds))
  return (
    <>
      <SInner>
        <SText>名：{locationData.name}</SText>
        <SText>〒：{locationData.address}</SText>
        <SText>種類：{convertStatusNumForString(locationData.status)}</SText>
        <SText>
          タグ：
          {convertKindsNumberForString(locationData.kinds).map((val, index) => (
            <Tag key={index}>{val}</Tag>
          ))}
        </SText>
        <SText tag="div">
          危険度：
          <ConvertNumIcon count={locationData.dangerLevel} />
        </SText>
        <SText>開始日：{convertViewDate(locationData.startDate)}</SText>
        <SText>終了日：{convertViewDate(locationData.endDate)}</SText>
      </SInner>
    </>
  );
};

export default LocationCard;
