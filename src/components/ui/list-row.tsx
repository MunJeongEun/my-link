"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "cn";
import { Badge } from "@/components/ui/badge";

export interface ListRowProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string | React.ReactNode;
  right?: React.ReactNode;
  showChevron?: boolean;
  href?: string;
  isExternal?: boolean;
  isActive?: boolean;
}

export function ListRow({
  left,
  title,
  subtitle,
  badge,
  right,
  showChevron = true,
  href,
  isExternal = false,
  className,
  ...props
}: ListRowProps) {
  const content = (
    <div
      className={cn(
        "group flex w-full items-center justify-between p-4 text-left transition-colors select-none",
        "hover:bg-secondary/60 active:bg-secondary/90",
        href && "cursor-pointer",
        className
      )}
      {...props}
    >
      {/* 좌측 콘텐츠 (아이콘/아바타 슬롯 + 텍스트 스택) */}
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        {left && (
          <div className="w-11 h-11 rounded-[14px] bg-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-foreground">
            {left}
          </div>
        )}
        <div className="flex flex-col min-w-0 text-left">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[15px] font-semibold text-foreground tracking-tight truncate">
              {title}
            </span>
            {typeof badge === "string" ? (
              <Badge
                variant="secondary"
                className="bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full border-none shrink-0"
              >
                {badge}
              </Badge>
            ) : (
              badge
            )}
          </div>
          {subtitle && (
            <span className="text-[13px] text-muted-foreground truncate mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* 우측 슬롯 (커스텀 노드 또는 ChevronRight) */}
      <div className="flex items-center gap-1 pl-2 shrink-0">
        {right}
        {showChevron && (
          <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all" />
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}
