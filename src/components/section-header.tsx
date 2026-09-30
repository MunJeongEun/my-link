import * as React from "react";
import { cn } from "cn";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  count?: number;
  description?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  title,
  count,
  description,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-1 px-1 mb-2.5", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-bold text-foreground tracking-tight flex items-center gap-1.5">
          <span>{title}</span>
        </h2>
        <div className="flex items-center gap-2">
          {typeof count === "number" && (
            <span className="text-[12px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              {count}
            </span>
          )}
          {action}
        </div>
      </div>
      {description && (
        <p className="text-[13px] text-muted-foreground leading-normal">
          {description}
        </p>
      )}
    </div>
  );
}
