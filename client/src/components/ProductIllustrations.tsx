import type { SVGProps } from 'react';

function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="#8B7355"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function KakigoriIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M50 30 C30 30 22 55 22 62 C22 70 34 74 50 74 C66 74 78 70 78 62 C78 55 70 30 50 30 Z" />
      <path d="M32 45 Q50 35 68 45" />
      <path d="M28 55 Q50 46 72 55" />
      <path d="M50 20 L50 30" />
      <path d="M45 16 Q50 12 55 16" stroke="#F4A460" />
    </IconBase>
  );
}

export function TokorotenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M20 45 C20 65 30 78 50 78 C70 78 80 65 80 45" />
      <path d="M18 45 L82 45" />
      <path d="M32 45 Q36 58 32 68" stroke="#F4A460" />
      <path d="M46 45 Q50 60 46 70" />
      <path d="M60 45 Q64 58 60 68" stroke="#F4A460" />
      <path d="M50 78 L50 84" />
    </IconBase>
  );
}

export function BusshukanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M50 55 C36 55 30 65 30 72 C30 78 40 80 50 80 C60 80 70 78 70 72 C70 65 64 55 50 55 Z" />
      <path d="M40 55 C36 40 30 30 24 22" />
      <path d="M46 55 C44 38 42 26 40 16" />
      <path d="M54 55 C56 38 58 26 60 16" />
      <path d="M60 55 C64 40 70 30 76 22" stroke="#F4A460" />
    </IconBase>
  );
}

export function KoorimitsuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M42 18 L58 18 L58 28 L64 36 L64 78 C64 82 60 84 50 84 C40 84 36 82 36 78 L36 36 L42 28 Z" />
      <path d="M36 50 L64 50" stroke="#F4A460" />
      <path d="M42 18 L42 12 L58 12 L58 18" />
    </IconBase>
  );
}
