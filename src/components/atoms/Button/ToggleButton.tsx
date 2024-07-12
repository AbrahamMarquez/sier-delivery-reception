import React from 'react';
import { ToggleButton as ToggleButtonPrime, ToggleButtonProps } from 'primereact/togglebutton';
import PropTypes from 'prop-types';

interface CustomToggleButtonProps extends ToggleButtonProps {
  tooltip?: string;
  disabled?: boolean;
  className?: string;
}

const ToggleButton: React.FC<CustomToggleButtonProps> = ({
  tooltip,
  disabled,
  className,
  onChange,
  onClick,
  checked,
  iconPos,
  offIcon,
  offLabel,
  onIcon,
  onLabel,
  tooltipOptions,
  readOnly = false,
  style,
  children,
  ...props
}) => {
  
  // disabled,
  // className,
  // onChange,
  // onClick,
  // checked,
  // iconPos,
  // offIcon,
  // offLabel,
  // onIcon,
  // onLabel,
  // tooltipOptions,
  // readOnly = false,
  // style,
  // children)
  return (
    <ToggleButtonPrime
      {...props}
      tooltip={tooltip}
      disabled={disabled}
      className={className}
      onChange={onChange}
      onClick={onClick}
      checked={checked}
      iconPos={iconPos}
      offIcon={offIcon}
      offLabel={offLabel}
      onIcon={onIcon}
      onLabel={onLabel}
      tooltipOptions={tooltipOptions}
      readOnly={readOnly}
      style={style}
    />
  );
};

ToggleButton.propTypes = {
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default ToggleButton;
