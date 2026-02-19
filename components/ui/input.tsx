import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-fid-red focus:shadow-glow',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
