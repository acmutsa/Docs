// icon.tsx
import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';
import { type HTMLAttributes } from 'react';

export default function IconContainer({
  icon: Icon,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon;
}): React.ReactElement {
  return (
    <div
      {...props}
      className={props.className}
    >
      {Icon ? <Icon stroke='lightblue' /> : <TerminalIcon />}
    </div>
  );
}