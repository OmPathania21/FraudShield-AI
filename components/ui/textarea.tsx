import * as React from 'react'
import { cn } from '@/lib/utils'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-fid-red focus:shadow-glow',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
