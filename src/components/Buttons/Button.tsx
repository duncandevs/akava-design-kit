/**
 * Primary Text Button component
 * Three Variants: Primary, Outline, Clear
 */
import React from 'react';
import './Button.css';
import {cn} from '../../utils';
import { Type as LucideIcon } from 'lucide-react';


export type ButtonVariants = 'primary' | 'outline' | 'clear';
export type ButtonSizes = 'giant' | 'large' | 'medium' | 'small' | 'tiny' ;
export interface ButtonProps extends React.ComponentProps<"button"> {
  disabled?: boolean;
  /** Size variant of the button */
  size: ButtonSizes;
  /** Visual style variant of the button */
  variant: ButtonVariants;
  /** Additional CSS classes to apply */
  className?: string;
  /** Optional icon to display before the label */
  LeftIcon?: typeof LucideIcon;
  /** Optional icon to display after the label */
  RightIcon?: typeof LucideIcon;
}

const Button = React.forwardRef<HTMLInputElement, ButtonProps>(
  ({ size, variant, disabled=false, className, LeftIcon, RightIcon, children, ...props }) => {
    const btnClassNames = cn(variant, size, className);
    const labelClassNames = cn('button-label', size, disabled && 'disabled');
    const iconClassNames = cn('icon', size, disabled && 'disabled');

    return <div id='core-button'>
        <button className={btnClassNames} {...props} disabled={disabled}>
          { LeftIcon && <LeftIcon className={iconClassNames} /> }
          <label className={labelClassNames}>{children}</label>
          { RightIcon && <RightIcon className={iconClassNames} /> }
        </button>
      </div>;
  }
);

Button.displayName = "Button";

export default Button;
