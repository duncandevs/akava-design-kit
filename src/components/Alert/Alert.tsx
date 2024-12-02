import React from 'react';
import './Alert.css';
import {cn} from '../../utils';
import { Type as LucideIcon } from 'lucide-react';
import { Text } from "../Text"
import TextButton from '../Buttons/TextButton';


type AlertVariants = 'default' | 'success' | 'info' | 'warning' | 'error';
interface AlertProps {
    variant: AlertVariants;
    Icon?: typeof LucideIcon;
    onClick?: () => void;
};

const Alert = React.forwardRef<HTMLInputElement, AlertProps>(
    ({ variant, Icon, onClick }) => {
      const containerClasses = cn("alert", variant)
      const iconClasses = cn("icon");

      return <div id="core-alert" onClick={onClick}>
            <div className={containerClasses}>
                {Icon && <Icon className={iconClasses} />}
                <div className="content">
                    <Text variant='s2'>Title</Text>
                    <Text variant='b3'>Get immediate alerts and a notification badge.</Text>
                </div>
                <div className='actions'>
                    <TextButton size='large'>Confirm</TextButton>
                    <TextButton size='large'>Cancel</TextButton>
                </div>
            </div>
        </div>;
    }
);

Alert.displayName = "Alert";

export default Alert;