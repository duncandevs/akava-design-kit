import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../../utils";
import "./Switch.css";
import Text from "../Text";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  /** Optional ID for the switch. Defaults to "airplane-mode" */
  id?: string;
  /** Optional className for custom styling */
  className?: string;
  /** Optional label for the switch */
  label?: string;
  /** Callback function when switch state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** alignLabelLeft */
  alignLabelLeft?: boolean;
}

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>, 
    SwitchProps
  >(({ className, disabled, alignLabelLeft, ...props }, ref) => (
  <div id="core-switch" className={cn(alignLabelLeft && "label-left")}>
    <SwitchPrimitives.Root className={cn(
        "switch", 
        className, 
        disabled && "disabled"
      )} id="airplane-mode" {...props}>
      <SwitchPrimitives.Thumb className={cn("thumb")} />
    </SwitchPrimitives.Root>
    {props.label && <Text variant="b1" className={cn("switch-label", disabled && "disabled" )}>{props.label}</Text>}
  </div>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
