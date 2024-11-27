import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import {cn} from '../../utils';

/**
 * Primary UI Button component
 * Three Variants: Primary, Outline, Clear
 */
const Button = ({ label, size, variant, disabled, LeftIcon, RightIcon, ...props }) => {
  const btnClassNames = cn(variant, size);
  const labelClassNames = cn(size, disabled && 'disabled');
  const iconClassNames = cn('icon', size, disabled && 'disabled');

  return <button className={btnClassNames} {...props} disabled={disabled}>
      { LeftIcon && <LeftIcon className={iconClassNames} /> }
      <label className={labelClassNames}>{label}</label>
      { RightIcon && <RightIcon className={iconClassNames} /> }
    </button>;
};

Button.propTypes = {
   /**
   * Button display text
   */
  label: PropTypes.string.isRequired,
  /**
   * Onclick handler for the button
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Vairant determines button style
   */
  variant: PropTypes.string,
  /**
  * Size determines button size
  */
  size: PropTypes.string,
  /**
  * Sets the buttons disabled state
  */
  disabled: PropTypes.bool,
   /**
  * LeftIcon renders diplays an icon to the left
  */
  LeftIcon: PropTypes.element,
  /**
  * RightIcon renders diplays an icon to the right
  */
  RightIcon: PropTypes.element
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium'
};

export default Button;
