interface Props {
  children: React.ReactNode
  className?: string
  rowStart?: number
  colStart?: number
  rowEnd?: number
  colEnd?: number
}

export default function GridItem({ children, className, rowEnd = 0, colEnd = 0, rowStart = 0, colStart = 0 }: Props) {
  return (
    <div className={`grid__item ${className || ''}`} style={{ 'gridArea':`${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}` }}>
      { children }
    </div>
  )
}
