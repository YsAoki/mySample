
// 受け取った数字または文字列をを既存で用意しているオブジェクトから数字または文字列に変換する

const baseNum: Record<number, string> = {
  1: "危険",
  2: "ヒヤリ",
  3: "事故",
}
// 受け取った数字を該当する文字列に追加する
export const convertStatusNumForString = (num: number): string  => { //この:stringの意味は「戻り値がstringであることを表している」
  return baseNum[num];
}

const baseString: Record<string, number> = {
  "危険":1,
  "ヒヤリ":2,
  "事故":3,
}
// 受け取った文字列を該当する数字に変換する
export const convertStatusStringForNum = (str: string): number => {
  return baseString[str];
} 



