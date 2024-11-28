import * as React from "react";
import './Input.css';
import { cn } from "../../utils";
import { Type as LucideIcon } from 'lucide-react';

interface InputProps extends React.ComponentProps<"input"> {
  variant: string;
  Icon?: typeof LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", Icon, ...props }, ref) => {
    return (
      <div className={cn("input-container", className)}>
        {Icon && <Icon className={cn("input-icon")} />}
        <input
          type={type}
          className="input-element"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
