type HalloweenStickerKind = 'bat' | 'pumpkin' | 'skull' | 'witch'

interface HalloweenStickerProps {
  kind: HalloweenStickerKind
  className: string
}

export function HalloweenSticker({ kind, className }: HalloweenStickerProps) {
  return (
    <div className={`halloween-sticker ${className}`} aria-hidden="true">
      {kind === 'bat' && (
        <svg viewBox="0 0 120 100" fill="none">
          <path d="M59 35C45 13 25 12 7 17l14 20L4 32c4 25 19 40 43 37l13-11 13 11c24 3 39-12 43-37l-17 5 14-20c-18-5-38-4-54 18Z" fill="#171719" stroke="#542329" strokeWidth="4" strokeLinejoin="round" />
          <path d="M42 40c5-8 11-12 18-12s13 4 18 12l-3 30c-4 12-10 18-15 18s-11-6-15-18l-3-30Z" fill="#2b2022" stroke="#8a3430" strokeWidth="3" />
          <path d="m43 49 15 4-12 5m31-9-15 4 12 5" stroke="#ff3b32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m49 70 5-3 5 6 5-6 6 4-7 13h-8l-6-14Z" fill="#d9c7b1" stroke="#171719" strokeWidth="2" strokeLinejoin="round" />
          <path d="m59 36 2-10m-9 13-5-8m27 8 5-8" stroke="#a34a3a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {kind === 'pumpkin' && (
        <svg viewBox="0 0 100 110" fill="none">
          <path d="M48 22c-2-10 3-16 13-19 4 9 0 16-10 21" fill="#34412b" stroke="#171719" strokeWidth="4" strokeLinejoin="round" />
          <path d="M50 29c-13-13-38-4-40 28-2 28 14 43 40 43s42-15 40-43C88 25 63 16 50 29Z" fill="#c9521e" stroke="#171719" strokeWidth="5" />
          <path d="M50 30c-8 15-9 50 0 67M34 29c-9 18-8 46 0 63M66 29c9 18 8 46 0 63" stroke="#87331e" strokeWidth="4" strokeLinecap="round" />
          <path d="m27 53 15 8-13 7m44-15-15 8 13 7" fill="#151416" stroke="#151416" strokeWidth="4" strokeLinejoin="round" />
          <path d="m31 74 38-3-8 20-8-10-9 12-6-13-9 7-2-13Z" fill="#171719" stroke="#171719" strokeWidth="3" strokeLinejoin="round" />
          <path d="m39 74 4 9m11-10 1 10m10-11-4 11" stroke="#ded1b9" strokeWidth="3" strokeLinecap="round" />
          <path d="m48 38-6 8m19-13 5 9" stroke="#f08a35" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {kind === 'skull' && (
        <svg viewBox="0 0 100 110" fill="none">
          <path d="M50 10c-25 0-41 19-40 43 0 17 9 28 21 35v11c0 5 4 8 9 8h20c5 0 9-3 9-8V88c13-7 21-18 21-35 0-24-16-43-40-43Z" fill="#b9b09f" stroke="#211b1a" strokeWidth="5" strokeLinejoin="round" />
          <path d="M22 48c1-12 8-20 17-20 10 0 15 9 14 20-1 12-7 20-15 20-10 0-17-8-16-20Zm40 0c0-11 6-20 16-20 9 0 16 8 17 20 1 12-6 20-16 20-9 0-16-8-17-20Z" fill="#171416" />
          <ellipse cx="40" cy="49" rx="4" ry="6" fill="#ff302b" /><ellipse cx="74" cy="49" rx="4" ry="6" fill="#ff302b" />
          <path d="m51 59-7 12h14l-7-12Z" fill="#302323" />
          <path d="M34 82v11m11-12v13m12-13v13m12-13v12" stroke="#302323" strokeWidth="4" strokeLinecap="round" />
          <path d="m28 25 13 8-9 9m37-23-5 12 12 5m-28 43-7 8m30-10 8 8" stroke="#77665b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {kind === 'witch' && (
        <svg viewBox="0 0 110 120" fill="none">
          <path d="m15 39 34-34 45 35-79-1Z" fill="#171719" stroke="#5f2927" strokeWidth="4" strokeLinejoin="round" />
          <path d="m49 8 7-7 8 12-9-3-4 8Z" fill="#9a342b" />
          <path d="M12 39c24-8 50 4 80-1 5 0 9 3 9 8 0 5-5 7-10 7H14c-7 0-11-3-10-7 0-3 3-6 8-7Z" fill="#321d26" stroke="#171719" strokeWidth="4" />
          <path d="M30 72c0-18 10-28 25-28s25 10 25 28v12c0 14-10 23-25 23S30 98 30 84V72Z" fill="#8e9a79" stroke="#171719" strokeWidth="4" />
          <path d="M30 72c-12 3-16 13-13 23 10 1 18-4 22-13m35-10c12 3 16 13 13 23-10 1-18-4-22-13" fill="#3b4932" stroke="#171719" strokeWidth="4" strokeLinejoin="round" />
          <path d="m38 69 13 5-12 4m33-9-13 5 12 4" stroke="#ff302b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m44 88 7-4 5 5 6-5 7 4-6 12H49l-5-12Z" fill="#21191a" stroke="#21191a" strokeWidth="2" strokeLinejoin="round" />
          <path d="m49 88 2 7m10-8-1 8m-27-40 9 5m30-5-8 5" stroke="#c5ae90" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  )
}