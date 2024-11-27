/**
 * Primary UI Button component
 * Three Variants: Primary, Outline, Clear
 */
import React from 'react';
import './Button.css';
import {cn} from '../../utils';
import { Type as LucideIcon } from 'lucide-react'


type ButtonVariants = 'primary' | 'outline' | 'clear';
type ButtonProps = React.ComponentProps<"button"> & {
  label: string;
  size: string;
  variant: ButtonVariants;
  LeftIcon: typeof LucideIcon;
  RightIcon: typeof LucideIcon;
}

const Button = React.forwardRef<HTMLInputElement, ButtonProps>(
  ({ label, size, variant, disabled, LeftIcon, RightIcon, ...props }) => {
    const btnClassNames = cn(variant, size);
    const labelClassNames = cn(size, disabled && 'disabled');
    const iconClassNames = cn('icon', size, disabled && 'disabled');

    return <button className={btnClassNames} {...props} disabled={disabled}>
        { LeftIcon && <LeftIcon className={iconClassNames} /> }
        <label className={labelClassNames}>{label}</label>
        { RightIcon && <RightIcon className={iconClassNames} /> }
      </button>;
  }
);

export default Button;
