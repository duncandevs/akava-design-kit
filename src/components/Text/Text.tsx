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
  children: React.ReactNode
  variant: TextVariants
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
  ...restProps
}: TextProps): JSX.Element => {
    const classNames = cn(variant);
    const tag = TagMap?.[variant] || 'p'
    return createElement( tag, { ...restProps, classNames, id: 'core-text-component' }, children)
}

Text.displayName = "Text"

export default Text