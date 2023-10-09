import React, { FC } from 'react'
import { SProductListBox } from './style'
import { ProductsProps } from '../../../types/types'

const ProductsListBox:FC<ProductsProps> = ({products,getDataEvent}) => {
  return (
    <SProductListBox>
      <button onClick={getDataEvent}>データ取得</button>
    </SProductListBox>
  )
}

export default ProductsListBox