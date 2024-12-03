import React from 'react';
import './IconBadge.css';
import {cn} from '../../utils';
import { Type as LucideIcon } from 'lucide-react';


type IconBadgeVariants = 'default' | 'success' | 'info' | 'warning' | 'error';
type IconBadgeSizes = 'medium' | 'small' | 'tiny'
export interface IconBadgeProps {
    /** Visual style variant of the icon badge */
    variant: IconBadgeVariants;
    /** Icon to display in the badge */
    Icon?: typeof LucideIcon;
    /** Callback function when badge is clicked */
    onClick?: () => void;
    /** Size variant of the badge */
    size?: IconBadgeSizes;
  }

const IconBadge = React.forwardRef<HTMLInputElement, IconBadgeProps>(
    ({ variant, Icon, onClick, size }) => {
      const containerClasses = cn("icon-badge", variant, size)
      const iconClasses = cn("icon", variant, size);

      return <div id="core-icon-badge" onClick={onClick}>
            <div className={containerClasses}>
                {Icon && <Icon className={iconClasses} />}
            </div>
        </div>;
    }
);

IconBadge.displayName = "IconBadge";

export default IconBadge;