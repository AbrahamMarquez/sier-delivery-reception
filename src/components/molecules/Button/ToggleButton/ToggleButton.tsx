import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import React, { ReactNode } from 'react'
import ToggleButton from '@/components/atoms/Button/ToggleButton'
import { ToggleButtonProps } from 'primereact/togglebutton'

export type ToggleButtonChangeEvent = React.ChangeEvent<HTMLInputElement>
interface ToggleButtonCProps extends ToggleButtonProps {
  variant?: string
  height?: string
  children: ReactNode
  tooltip?: string
  disabled?: boolean
  className?: string
  status?: boolean
}

const ToggleButtonC: React.FC<ToggleButtonCProps> = ({
  variant = 'primary',
  height = '45',
  className = '',
  children,
  ...props
}) => {
  return (
    <ToggleButton
      {...props}
      className={`${styles.button} ${styles[variant]} ${className}`}
      style={{ height }}
    >
      {children}
    </ToggleButton>
  )
}

ToggleButtonC.propTypes = {
  variant: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}

export default ToggleButtonC
