import * as React from "react";
import './Input.css';
import { cn } from "../../utils";
import { Type as LucideIcon } from 'lucide-react';

type InputSize = 'large' | 'medium';
type InputVariant = 'success' | 'info' | 'warning' | 'error'; 
interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
    size: InputSize;
    inputProps?: React.ComponentProps<"input">;
    variant?: InputVariant;
    Icon?: typeof LucideIcon;
    label?: string,
    helperText?: string;
    placeholder?: string;
    onValueChange: (text: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", size='large', variant, Icon, inputProps,label, helperText, placeholder, onValueChange }, ref) => {
    const containerClasses = cn("container", variant);
    const inputContainerClasses = cn("input-container", className, variant);
    const inputClasses = cn("input-element", size, variant);
    const iconClasses = cn("input-icon", variant);
    const helperClasses = cn("helper", variant);

    const _handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(e.target.value)
    };

    return (
        <div className={containerClasses}>
            {label && <label>{label}</label>}
            <div className={inputContainerClasses}>
                {Icon && <Icon className={iconClasses} />}
                <input
                    type={type}
                    className={inputClasses}
                    ref={ref}
                    placeholder={placeholder || "Enter text here"}
                    onChange={_handleOnChange}
                    {...inputProps}
                />
            </div>
            {helperText && <span className={helperClasses}>{helperText}</span>}
        </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
