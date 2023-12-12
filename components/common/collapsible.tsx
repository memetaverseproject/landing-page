interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  expanded: boolean
  toggle: () => void
  renderExpanded?: React.ReactNode
}

export default function Collapsible({ children, className, expanded, toggle, renderExpanded, ...rest }: Props) {

  return (
    <div className={`collapsible ${className}`} onClick={toggle} {...rest}>
      <div className="flex items-center justify-between">
        {children}
        {/*<svg className={`transition ${expanded ? 'rotate-180' : ''}`}*/}
        {/*     width="24"*/}
        {/*     height="24"*/}
        {/*     viewBox="0 0 24 24"*/}
        {/*     fill="none"*/}
        {/*     xmlns="http://www.w3.org/2000/svg">*/}
        {/*  <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />*/}
        {/*</svg>*/}
      </div>

      {!!renderExpanded && <div className={`transition-all ${expanded ? 'mt-6' : 'h-0 opacity-0 overflow-hidden'}`}>
        {renderExpanded}
      </div>}
    </div>
  )
}