import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import { ButtonVariants } from './Button';
import {cn} from '../../utils';

/**
 * Primary UI Button component
 * Three Variants: Primary, Outline, Clear
 */
export interface IconButtonProps extends React.ComponentProps<'button'> {
  label: string;
  onClick: () => void;
  variant?: ButtonVariants;
  size?: string;
  disabled?: boolean;
  Icon: React.ElementType;
}

const IconButton = ({ label, size, variant="primary", disabled, Icon, ...props }) => {
  const btnClassNames = cn('icon-button', variant, size);
  const iconClassNames = cn('icon', size, disabled && 'disabled');

  return <div id="core-button">
        <button className={btnClassNames} {...props} disabled={disabled}>
          <Icon classNames={iconClassNames}/>
        </button>
    </div>;
};


export default IconButton;
