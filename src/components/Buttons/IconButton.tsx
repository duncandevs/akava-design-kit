import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import {cn} from '../../utils';

/**
 * Primary UI Button component
 * Three Variants: Primary, Outline, Clear
 */
const IconButton = ({ label, size, variant, disabled, Icon, ...props }) => {
  const btnClassNames = cn('icon-button', variant, size);
  const iconClassNames = cn('icon', size, disabled && 'disabled');

  return <button className={btnClassNames} {...props} disabled={disabled}>
      <Icon classNames={iconClassNames}/>
    </button>;
};

IconButton.propTypes = {
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
  * Icon renders diplays an icon
  */
  Icon: PropTypes.element,
};

IconButton.defaultProps = {
  variant: 'primary',
  size: 'medium'
};

export default IconButton;
