import { Button as ButtonPrime } from 'primereact/button'
import { ReactNode } from 'react'

interface ButtonProps {
  label?: string;
  type?: "submit" | "reset" | "button";
  icon?: string;
  iconPos?: "top" | "bottom" | "left" | "right";
  onClick?: () => void;
  tooltip?: string;
  tooltipOptions?: any;
  severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help"; // Ensure it matches the expected types
  raised?: boolean;
  rounded?: boolean;
  text?: boolean;
  outlined?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: any;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  icon,
  iconPos,
  onClick,
  tooltip,
  tooltipOptions,
  severity,
  raised,
  rounded,
  text,
  outlined,
  children,
  disabled = false,
  className = '',
  style,
}) => {
  return (
    <ButtonPrime
      label={label}
      type={type}
      icon={icon}
      iconPos={iconPos}
      onClick={onClick}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      severity={severity}
      raised={raised}
      rounded={rounded}
      text={text}
      outlined={outlined}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </ButtonPrime>
  )
}
