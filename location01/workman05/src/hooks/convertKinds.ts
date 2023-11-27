// 受け取ったintやstr型の配列を、該当する数字文字に変換する関数

const baseNum: Record<number, string>= {
  1: "足場崩壊",
  2: "転倒労災",
  3: "近隣苦情",
  4: "環境問題",
  5: "オゾン層破壊",
  6: "ぬかるみ転倒",
  7: "危険水位",
  8: "つまづき転倒",
  9: "客先問題",
  10: "その他",
};

export const convertKindsNumberForString = (numArray: number[]): string[] => {
  return numArray.map((num) => baseNum[num])
}

const baseString: Record<string, number> = {
  "足場崩壊": 1,
  "転倒労災": 2,
  "近隣苦情": 3,
  "環境問題": 4,
  "オゾン層破壊": 5,
  "ぬかるみ転倒": 6,
  "危険水位": 7,
  "その他": 8,
};

export const convertKindsStringForNumber = (strArray: string[]): number[] =>  {
  return strArray.map((str) => baseString[str])
}
