import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  value?: string;
}

export function Input({ 
  className, 
  type, 
  onChange, 
  value: propValue, 
  ...props 
}: InputProps) {
  const [internalValue, setInternalValue] = useState(propValue || "");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  // 외부에서 value가 변경될 경우 내부 상태 업데이트
  React.useEffect(() => {
    if (propValue !== undefined && propValue !== internalValue) {
      setInternalValue(propValue);
    }
  }, [propValue]);

  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      value={internalValue}
      onChange={handleChange}
      {...props}
    />
  )
}
