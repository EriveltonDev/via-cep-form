import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'

export interface RootProps {
  children: ReactNode
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export interface HelperTextProps {
  children: ReactNode
}

export interface ElementWithMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: string
}