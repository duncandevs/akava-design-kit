import React from 'react';
import './TextButton.css';
import {cn} from '../../utils';


type TextButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant'
interface TextButtonProps {
    size: TextButtonSize;
    children: string;
    onClick?: () => void;
};

const TextButton = React.forwardRef<HTMLInputElement, TextButtonProps>(
    ({ size="medium", onClick, children }) => {
      const textClasses = cn(size)

      return <p id="core-text-button" className={textClasses} onClick={onClick}>{children}</p>
    }
);

TextButton.displayName = "TextButton";

export default TextButton;