// Réplica tipográfica del logo de Instagram: "Love" manuscrita sobre "story" en serif
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__love">Love</span>
      <span className="logo__story">story</span>
    </span>
  )
}
