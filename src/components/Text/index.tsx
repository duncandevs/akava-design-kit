import { createElement } from "react"
import { cn } from '../../utils'
import "./Text.css";

type TextVariants = 
  | "h1" | "h2" | "h3" | "h4" | "h5" 
  | "s1" | "s2" 
  | "b1" | "b2" | "b3" | "b4" 
  | "c1" | "c2" | "c3" 
  | "label";

export interface TextProps {
  /** Content to be rendered */
  children: React.ReactNode;
  /** Typography variant to apply */
  variant: TextVariants;
  /** Additional CSS classes to apply */
  className?: string;
}

const TagMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    label: "label",
};

/**
 * Primary UI component for Text display
 */
const Text = ({
  children,
  variant,
  className,
  ...restProps
}: TextProps): JSX.Element => {
    const classNames = cn(variant, className);
    const tag = TagMap?.[variant] || 'p'
    return createElement( tag, { ...restProps, class: classNames, id: 'core-text' }, children)
}

Text.displayName = "Text"

export default Text