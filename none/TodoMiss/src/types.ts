import { type } from "os";
import { ReactNode } from "react";

// 直接の使用は禁止！！
export type AllStyleProps = React.CSSProperties;

export type ChildrenProps = {
  children: ReactNode;
}