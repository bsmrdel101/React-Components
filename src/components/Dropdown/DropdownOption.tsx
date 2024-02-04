import React, { useEffect } from "react";
import { useState } from "react";


interface Props {
  children: React.ReactNode
  value: string
  className?: string
  defaultOption?: boolean
  onClick?: () => void
}

export default function DropdownOption({ children, value, className, defaultOption, onClick }: Props) {


  return (
    <div className={`dropdown__option ${className || ''}`} onClick={() => onClick && onClick()}>
      { children }
    </div>
  );
}