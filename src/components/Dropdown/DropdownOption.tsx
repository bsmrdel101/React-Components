import React from "react";

interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}


export default function DropdownOption({ children, className, onClick }: Props) {
  return (
    <div className={`dropdown__option ${className || ''}`} onClick={() => onClick && onClick()}>
      { children }
    </div>
  );
}
