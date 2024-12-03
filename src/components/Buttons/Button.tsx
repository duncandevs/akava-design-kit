/**
 * Primary Text Button component
 * Three Variants: Primary, Outline, Clear
 */
import React from 'react';
import './Button.css';
import {cn} from '../../utils';
import { Type as LucideIcon } from 'lucide-react';


export type ButtonVariants = 'primary' | 'outline' | 'clear';
export interface ButtonProps extends React.ComponentProps<"button"> {
  label: string;
  size: string;
  variant: ButtonVariants;
  className?: string;
  LeftIcon?: typeof LucideIcon;
  RightIcon?: typeof LucideIcon;
};

const Button = React.forwardRef<HTMLInputElement, ButtonProps>(
  ({ label, size, variant, disabled, className, LeftIcon, RightIcon, ...props }) => {
    const btnClassNames = cn(variant, size, className);
    const labelClassNames = cn(size, disabled && 'disabled');
    const iconClassNames = cn('icon', size, disabled && 'disabled');

    return <div id='core-button'>
        <button className={btnClassNames} {...props} disabled={disabled}>
          { LeftIcon && <LeftIcon className={iconClassNames} /> }
          <label className={labelClassNames}>{label}</label>
          { RightIcon && <RightIcon className={iconClassNames} /> }
        </button>
      </div>;
  }
);

Button.displayName = "Button";

export default Button;
