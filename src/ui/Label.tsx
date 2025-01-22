import { LabelHTMLAttributes, ReactNode } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
}

export function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>
}
