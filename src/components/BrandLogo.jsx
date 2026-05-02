export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Paulo Henrique Mendes">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper/20 bg-white p-2">
        <img className="h-8 w-8 object-contain" src="/brand/simbolo.svg" alt="" aria-hidden="true" />
      </span>
      {!compact && <img className="h-6 w-auto max-w-[210px] object-contain sm:h-7" src="/brand/logotipo.svg" alt="Paulo Henrique Mendes" />}
    </span>
  )
}
