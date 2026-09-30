import * as React from "react";
import { PlatformIcon } from "@/components/icons";
import { cn } from "cn";

export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface SocialBarProps {
  items: SocialLinkItem[];
  className?: string;
}

export function SocialBar({ items, className }: SocialBarProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={cn("flex items-center justify-center gap-3 py-2", className)}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={item.name}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-secondary/80 active:scale-95 transition-all shadow-xs"
        >
          <PlatformIcon name={item.icon} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
