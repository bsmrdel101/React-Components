import React from "react";


interface Props {
  children: any
  className?: string
  noHover?: boolean
}


export default function Button({ children, className, noHover }: Props) {
  const getClassNames = (): string[] => {
    const classes = [];
    if (noHover) classes.push('no-hover');
    return classes;
  };

  const classNames = getClassNames();
  const classValue = classNames.length > 0 ? `button ${classNames.join(' ')}` : 'button';


  return (
    <button
      className={classValue}
    >
      { children }
    </button>
  );
}
