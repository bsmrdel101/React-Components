import React from "react";


interface Props {
  children: any
  className?: string
  onClick?: () => void
  noHover?: boolean
  noScale?: boolean
}


export default function Button({ children, className, noHover, noScale, onClick }: Props) {
  const getClassNames = (): string[] => {
    const classes = [];
    if (noHover) classes.push('no-hover');
    if (noScale) classes.push('no-scale');
    return classes;
  };

  const classNames = getClassNames();
  let classValue = classNames.length > 0 ? `button ${classNames.join(' ')}` : 'button';
  if (className) classValue += ` ${className}`;

  return (
    <button
      className={classValue}
      onClick={onClick}
    >
      { children }
    </button>
  );
}
