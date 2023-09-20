// CardBox.tsx
import React, { FC } from 'react';
import { ShopProps } from '../../../types/types';
import { SCardBox } from './style';
import Card from '../../02molecules/Card';

type Props = {
  productList: ShopProps[];
};

const CardBox: FC<Props> = ({ productList }) => {
  return (
    <SCardBox>
      {productList.map((val) => (
        <Card name={val.name} price={val.price} />
      ))}
    </SCardBox>
  );
};

export default CardBox;