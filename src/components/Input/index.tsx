import * as React from "react";
import './Input.css';
import { cn } from "../../utils";
import { Type as LucideIcon } from 'lucide-react';

type InputSize = 'large' | 'medium';
type InputVariant = 'success' | 'info' | 'warning' | 'error'; 
export interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
    /** Size variant of the input */
    size: InputSize;
    /** Additional input element props */
    inputProps?: React.ComponentProps<"input">;
    /** Visual style variant of the input */
    variant?: InputVariant;
    /** Icon to display inside the input */
    Icon?: typeof LucideIcon;
    /** Label text above the input */
    label?: string;
    /** Helper text below the input */
    helperText?: string;
    /** Placeholder text when input is empty */
    placeholder?: string;
    /** Callback function when input value changes */
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
        <div id="core-input">
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
        </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
