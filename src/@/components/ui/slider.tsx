import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
      <SliderPrimitive.Range className="absolute h-full dark:bg-slate-50" />
    </SliderPrimitive.Track>
    <div className="absolute flex justify-between w-full">
      <div className="w-4 h-4 rounded-full bg-[#fff9db] border-2 border-slate-200"></div>
      <div className="w-4 h-4 rounded-full bg-[#ffec99] border-2 border-slate-200"></div>
      <div className="w-4 h-4 rounded-full bg-[#ffd43b] border-2 border-slate-200"></div>
      <div className="w-4 h-4 rounded-full bg-[#fab005] border-2 border-slate-200"></div>
      <div className="w-4 h-4 rounded-full bg-[#632e11] border-2 border-slate-200"></div>
    </div>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-slate-400 bg-white ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-[#ffd43b] active:bg-[#ffd43b]" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
