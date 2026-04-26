import type { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface BadgeProps {
  Icon: IconType;
  color: string;
  label: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ Icon, color, label, className }) => (
  <div
    className={cn(
      'inline-flex items-center gap-3 rounded-full bg-secondary text-secondary-foreground pl-1 pr-5 py-1 border border-border shadow-sm',
      className,
    )}
  >
    <span
      className="flex h-9 w-9 items-center justify-center rounded-full"
      style={{ backgroundColor: `${color}1F` }}
    >
      <Icon className="h-5 w-5" style={{ color }} aria-hidden="true" />
    </span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Badge;
