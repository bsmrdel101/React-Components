import React, { useEffect, useRef } from "react"


interface Props {
  children: React.ReactNode
  className?: string
  rows?: number
  cols?: number
  gap?: number
}

export default function Grid({ children, className, rows = 1, cols = 12, gap = 0 }: Props) {
  const ref = useRef(null) as any;
    
  useEffect(() => {
    const grid = ref.current as HTMLDivElement;
    grid.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    grid.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
    grid.style.setProperty('grid-gap', `${gap}rem`);
  }, []);


  return (
    <div className={`grid ${className || ''}`} ref={ref}>
      { children }
    </div>
  )
}
