export default function BrandLogo({ compact = false, className = '' }) {
  const assetBase = import.meta.env.BASE_URL

  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Paulo Henrique Mendes">
      <img className={`${compact ? 'h-10' : 'h-11'} w-auto shrink-0 object-contain`} src={`${assetBase}brand/simbolo.svg`} alt="" aria-hidden="true" />
      {!compact && <img className="h-6 w-auto max-w-[210px] object-contain sm:h-7" src={`${assetBase}brand/logotipo.svg`} alt="Paulo Henrique Mendes" />}
    </span>
  )
}
