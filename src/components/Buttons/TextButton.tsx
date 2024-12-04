import React from 'react';
import './TextButton.css';
import {cn} from '../../utils';


type TextButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant'
interface TextButtonProps {
    size: TextButtonSize;
    children: string;
    onClick?: () => void;
    className?: string;
};

const TextButton = React.forwardRef<HTMLInputElement, TextButtonProps>(
    ({ size="medium", onClick, className, children, ...props }, ref) => {
      const textClasses = cn(size, className);
      return <p id="core-text-button" className={textClasses} onClick={onClick} {...props}>{children}</p>
    }
);

TextButton.displayName = "TextButton";

export default TextButton;