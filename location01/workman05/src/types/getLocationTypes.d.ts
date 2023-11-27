export type GetLocationTypes = {
  id: string,
  name: string,
  address: string,
  status: number,
  kinds: number[],
  dangerLevel: number;
  startDate: string;
  endDate: string;
}