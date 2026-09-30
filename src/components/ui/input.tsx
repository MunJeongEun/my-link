"use client";

import * as React from "react";
import { cn } from "cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 입력 칸 왼쪽에 삽입할 노드 (예: 아이콘) */
  leftSlot?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", leftSlot, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {leftSlot && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-muted-foreground">
            {leftSlot}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            // 기본 레이아웃
            "w-full h-12 rounded-[12px] border border-input bg-background",
            "px-4 text-[15px] text-foreground placeholder:text-muted-foreground",
            // 포커스 링 (TDS: toss-blue ring)
            "outline-none transition-all",
            "focus:border-primary focus:ring-3 focus:ring-primary/20",
            // 비활성화
            "disabled:pointer-events-none disabled:opacity-50",
            // 왼쪽 슬롯 있을 때 패딩 추가
            leftSlot && "pl-10",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
