import React from 'react';
import './Badge.css';
import {cn} from '../../utils';
import { Type as LucideIcon, XIcon } from 'lucide-react';


type BadgeVariants = 'default' | 'success' | 'info' | 'warning' | 'error';
interface BadgeProps {
    variant: BadgeVariants;
    label: string;
    isShown: boolean;
    Icon?: typeof LucideIcon;
    hideCloseIcon?: boolean;
    onClose?: () => void;
};

const Badge = React.forwardRef<HTMLInputElement, BadgeProps>(
    ({ label, variant, Icon, hideCloseIcon, onClose }) => {
      const containerClasses = cn("badge", variant)
      const iconClasses = cn("icon", variant);
      const closeIconClasses = cn("close-icon", variant)

      return <div id="core-badge">
            <div className={containerClasses}>
                {Icon && <Icon className={iconClasses} />}
                <p className='label'>{label}</p>
                {!hideCloseIcon && <XIcon className={closeIconClasses}  onClick={onClose}/>}
            </div>
        </div>;
    }
);

Badge.displayName = "Badge";

export default Badge;