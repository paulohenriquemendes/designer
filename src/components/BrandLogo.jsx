export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 bg-white/10 p-1.5">
        <img className="h-full w-full object-contain" src="/brand/ph-symbol.png" alt="" aria-hidden="true" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-sm font-black uppercase tracking-[0.2em]">Paulo Henrique</span>
          <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.32em] text-signal">Mendes</span>
        </span>
      )}
    </span>
  )
}
