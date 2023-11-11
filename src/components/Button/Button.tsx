import React from "react";


interface Props {
  children: any
}

export default function Button({ children }: Props) {
  return (
    <button
    >
      { children }
    </button>
  );
}
