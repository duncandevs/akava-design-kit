import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import "./Checkbox.css";

import { cn } from "../../utils"
import Text from "../Text";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  // Add any additional custom props here if needed
  alignLeftLabel?: boolean;
  label?: string;
  disabled?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ alignLeftLabel, label, className, disabled, ...props }, ref) => (
    <div id="core-checkbox">
        <div className={cn("container", alignLeftLabel && "alignLeftLabel")}>
          <CheckboxPrimitive.Root
              ref={ref}
              className={cn("checkbox", className )}
              disabled={disabled}
              {...props}
          >
              <CheckboxPrimitive.Indicator
              className={cn("checkbox-indicator")}
              >
              <Check className="check" />
              </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          {label && <Text variant="b1" className={cn("checkbox-label", disabled && "disabled")}>{label}</Text>}
        </div>
  </div>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
