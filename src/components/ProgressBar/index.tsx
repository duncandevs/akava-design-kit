import React from "react";
import * as ProgressPrimitives from "@radix-ui/react-progress";
import "./Progress.css";
import Text from "../Text";
import { cn } from "../../utils";

export interface ProgressBarProps {
  value?: number;
  max?: number;
  animated?: boolean;
  className?: string;
  labelPosition?: 'left' | 'right';
};

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value = 0, max=100, className, labelPosition = 'right' }, ref) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 500);
        return () => clearTimeout(timer);
    }, [value]);

    return (
      <div id="core-progress-bar" ref={ref} className={cn(className, `label-${labelPosition}`)}>
        <ProgressPrimitives.Root className="progress-root" value={progress}>
          <ProgressPrimitives.Indicator
            className="progress-indicator"
            style={{ transform: `translateX(-${max - progress}%)` }}
          />
        </ProgressPrimitives.Root>
		    <Text variant="b3">{progress}%</Text>
      </div>
    );
  }
);

export default ProgressBar;
