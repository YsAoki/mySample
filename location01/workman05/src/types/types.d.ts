import React from "react";

export type ChildrenProps = {
  children: React.ReactNode;
}

export type TagProps = {
  tag?: keyof JSX.IntrinsicElements;
}

