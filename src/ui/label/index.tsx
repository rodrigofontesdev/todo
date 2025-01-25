type LabelProps = {
  children: React.ReactNode
} & React.ComponentProps<'label'>

export function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>
}
