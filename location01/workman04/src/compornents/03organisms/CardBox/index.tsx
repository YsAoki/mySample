import React, { FC, useState } from "react";
import { SInner } from "./style";
import { GetLocationTypes } from "../../../types/getLocationTypes";
import LocationCard from "../../02molecules/LocationCard";

type Props = {
  locationData: GetLocationTypes[];
};

const CardBox: FC<Props> = ({ locationData }) => {
  return (
    <>
      <SInner>
        {locationData.map((val) => (
          <LocationCard locationData={val} key={val.id} />
        ))}
      </SInner>
    </>
  );
};

export default CardBox;
