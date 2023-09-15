import React, { FC } from 'react'
import { TypeFlexBoxStyleProps } from '../../../types/types';
import { StyleFlexBox } from './style';

type Props = {
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}

const FlexBox:FC<Props & TypeFlexBoxStyleProps> = ({ tag, children, ...prop }) => {
  return (
    <StyleFlexBox as={tag} {...prop}>{children}</StyleFlexBox>
  );
};

export default FlexBox