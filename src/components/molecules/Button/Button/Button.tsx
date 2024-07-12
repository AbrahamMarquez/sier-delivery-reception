import { Button as ButtonAtom } from '@/components/atoms/Button'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import React from 'react'

export interface ButtonProps {
  variant?: string
  height?: string
  width?: string
  icon?: string
  type?: "submit" | "reset" | "button"
  fontSize?: string
  className?: string
  borderRadius?: string
  disabled?: boolean
  tooltip?: string
  tooltipOptions?: { position: string, mouseTrackTop?: number, appendTo?: string }
  children?: React.ReactNode
  onClick?: (e?: any) => void
  style?: any
  label?: any
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary' || 'secondary',
    height = '',
    width = '',
    className = '',
    disabled,
    borderRadius = '',
    children,
    fontSize,
    icon,
    tooltip, // Asegúrate de incluir tooltip aquí
    tooltipOptions,
    onClick,
    style
  } = props

  const styleCustom = {
    height, width, borderRadius, fontSize
  }

  return (
    <ButtonAtom
      {...props}
      className={`${styles.button} ${styles[variant]} ${className} ${disabled ? styles.button_disabled : ''}`}
      style={{ ...styleCustom, ...style }}
      onClick={onClick}
    >
      {children}
    </ButtonAtom>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string,
  borderRadius: PropTypes.string
}

export default Button
