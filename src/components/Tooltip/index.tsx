import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import "./Tooltip.css";
import { cn } from "../../utils";

export const TooltipProvider = TooltipPrimitive.Provider;

export const TooltipRoot = TooltipPrimitive.Root;

type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
export const TooltipContent = ({ className, sideOffset, side="bottom", ...props }: TooltipContentProps) => (
  <TooltipPortal>
    <TooltipPrimitive.Content 
      className={cn("TooltipContent", className)}
      sideOffset={sideOffset} 
      side={side}
      {...props}
    />
  </TooltipPortal>
);

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipPortal = TooltipPrimitive.Portal;

type TooltipArrowProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
export const TooltipArrow = ({ className, ...props}: TooltipArrowProps) => <TooltipPrimitive.Arrow className={cn("TooltipArrow", className)} {...props} />;

export const ToolTip = ({ children }) => (
  <TooltipProvider>
    <TooltipRoot>
      {children}
    </TooltipRoot>
  </TooltipProvider>
);