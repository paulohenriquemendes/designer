export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`grid place-items-center rounded-full border border-paper/20 bg-white p-2 ${compact ? 'h-11 w-11 overflow-hidden' : 'h-12 w-[186px]'}`}>
        <img className={compact ? 'h-9 max-w-none object-contain' : 'h-8 w-full object-contain'} src="/brand/minha-logo.svg" alt="Paulo Henrique Mendes" />
      </span>
    </span>
  )
}
