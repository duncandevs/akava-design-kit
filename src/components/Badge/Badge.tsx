import React from 'react';
import './Badge.css';
import {cn} from '../../utils';
import { Type as LucideIcon, XIcon } from 'lucide-react';


type BadgeVariants = 'default' | 'success' | 'info' | 'warning' | 'error';
interface BadgeProps {
    variant: BadgeVariants;
    label: string;
    Icon?: typeof LucideIcon;
    hideCloseIcon?: boolean;
};

const Badge = React.forwardRef<HTMLInputElement, BadgeProps>(
    ({ label, variant, Icon, hideCloseIcon }) => {
      const containerClasses = cn("container", variant)
      const iconClasses = cn("icon", variant);

      return <div id="core-badge-component">
            <div className={containerClasses}>
                {Icon && <Icon />}
                <p className='badge-label'>{label}</p>
                {!hideCloseIcon && <XIcon className={iconClasses} />}
            </div>
        </div>;
    }
);

Badge.displayName = "Badge";

export default Badge;