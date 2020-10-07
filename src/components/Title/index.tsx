import React from "react";

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return <h1>{title}</h1>;
}
