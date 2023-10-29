export type ChildrenProps = {
  children?: React.ReactNode;
}

export type TagProps = {
  tag?: string;
}

export type AllStyleProps = React.CSSProperties;

export type ProductsList = {
  id :string;
  name: string;
  price: number;
  detail: string;
  imageUrl: string;
  isPopular: true;
  startDate: string;
  endDate: string;
  company: string;
}