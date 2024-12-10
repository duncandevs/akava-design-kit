import React from 'react';
import './Alert.css';
import {cn} from '../../utils';
import { Type as LucideIcon } from 'lucide-react';
import Text from "../Text"
import TextButton from '../Buttons/TextButton';


type AlertVariants = 'default' | 'success' | 'info' | 'warning' | 'error';
export interface AlertProps {
    /** The Visible Title of the Alert */
    title: string;
    /** The Alert Description*/
    description: string;
    /** Visual style variant of the alert */
    variant: AlertVariants;
    /** Optional icon to display in the alert */
    Icon?: typeof LucideIcon;
    /** Callback function when confirm button is clicked */
    onConfirm?: () => void;
    /** Callback function when cancel button is clicked */
    onCancel?: () => void;
}

const Alert = React.forwardRef<HTMLInputElement, AlertProps>(
    ({ title, description, variant, Icon, onConfirm, onCancel }) => {
      const containerClasses = cn("alert", variant)
      const iconClasses = cn("icon");

      return <div id="core-alert">
            <div className={containerClasses}>
                {Icon && <Icon className={iconClasses} />}
                <div className="content">
                    <Text variant='s2' className='title'>{title}</Text>
                    <Text variant='b3' className='subtitle'>{description}</Text>
                    <div className='actions'>
                        <TextButton size='large' onClick={onConfirm}>Confirm</TextButton>
                        <TextButton size='large' className="text-secondary" onClick={onCancel}>Cancel</TextButton>
                    </div>
                </div>
            </div>
        </div>;
    }
);

Alert.displayName = "Alert";

export default Alert;