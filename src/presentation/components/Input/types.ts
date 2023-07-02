import { LabelHTMLAttributes, ReactNode } from 'react'

export interface RootProps {
  children: ReactNode
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export interface HelperTextProps {
  children: ReactNode
}