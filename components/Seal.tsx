// Sello de lacre con texto circular, guiño a las invitaciones de la marca
export default function Seal({ text = 'Wedding planner · Barcelona · Love story · ', className = '' }: { text?: string; className?: string }) {
  return (
    <div className={`seal ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="seal__ring">
        <defs>
          <path id="seal-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text>
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <span className="seal__core">Ls</span>
    </div>
  )
}
