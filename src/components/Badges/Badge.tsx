import React from 'react';
import './Badge.css';
import {cn} from '../../utils';
import { Type as LucideIcon, XIcon } from 'lucide-react';


type BadgeVariants = 'default' | 'success' | 'info' | 'warning' | 'error';
type BadgeSizes = 'medium' | 'small' | 'tiny';
export interface BadgeProps {
    /** Visual style variant of the badge */
    variant: BadgeVariants;
    /** Text to display inside the badge */
    label: string;
    /** Controls badge visibility */
    isShown: boolean;
    /** Optional icon to display before the label */
    Icon?: typeof LucideIcon;
    /** Whether to show the close icon */
    hideCloseIcon?: boolean;
    /** Callback function when close icon is clicked */
    onClose?: () => void;
    /** Size variant of the badge */
    size: BadgeSizes;
  }

const Badge = React.forwardRef<HTMLInputElement, BadgeProps>(
    ({ label, variant, size, Icon, hideCloseIcon, onClose }) => {
      const containerClasses = cn("badge", variant, size)
      const iconClasses = cn("icon", variant);
      const closeIconClasses = cn("close-icon", variant, size)

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