export type ChildrenProps = {
  children?: React.ReactNode;
}

export type TagProps = {
  tag?: React.ElementType;
}

export type AllStyleProps = React.CSSProperties;

export type Product = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type ProductGetFunction = {
  getEvent: () => void;
}

export type ProductsProps = {
  products: Product[];
  getDataEvent: () => void;
};