"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

interface CheckboxProps {
  id?: string;
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Checkbox({
  id,
  className,
  checked: propChecked = false,
  onCheckedChange,
  disabled,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(propChecked);

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
    onCheckedChange?.(checked);
  };

  // 외부에서 checked 값이 변경될 경우 내부 상태 업데이트
  useEffect(() => {
    if (propChecked !== isChecked) {
      setIsChecked(propChecked);
    }
  }, [propChecked]);

  return (
    <CheckboxPrimitive.Root
      id={id}
      checked={isChecked}
      onCheckedChange={handleCheckedChange}
      disabled={disabled}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
