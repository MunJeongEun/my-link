"use client";

import * as React from "react";
import { LinkItem, SectionItem } from "@/types/link";
import { ListRow } from "@/components/ui/list-row";
import { SectionHeader } from "@/components/section-header";
import { PlatformIcon } from "@/components/icons";
import { cn } from "cn";

export interface LinkListProps {
  sections: SectionItem[];
  links: LinkItem[];
  className?: string;
  onLinkClick?: (link: LinkItem) => void;
}

export function LinkList({
  sections,
  links,
  className,
  onLinkClick,
}: LinkListProps) {
  // order 기준 정렬
  const sortedSections = [...sections].sort((a, b) => a.order - b.order);
  const activeLinks = links.filter((link) => link.isActive);

  // 섹션별로 링크 분류
  const sectionMap = new Map<string, LinkItem[]>();
  sortedSections.forEach((s) => sectionMap.set(s.id, []));

  const unassignedLinks: LinkItem[] = [];

  activeLinks.forEach((link) => {
    if (link.sectionId && sectionMap.has(link.sectionId)) {
      sectionMap.get(link.sectionId)!.push(link);
    } else {
      unassignedLinks.push(link);
    }
  });

  // 각 섹션 내 링크 정렬
  sectionMap.forEach((list) => {
    list.sort((a, b) => a.order - b.order);
  });
  unassignedLinks.sort((a, b) => a.order - b.order);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {sortedSections.map((section) => {
        const sectionLinks = sectionMap.get(section.id) || [];
        if (sectionLinks.length === 0) return null;

        return (
          <div key={section.id} className="flex flex-col">
            <SectionHeader title={section.title} count={sectionLinks.length} />
            
            <div className="flex flex-col rounded-[20px] border border-border overflow-hidden bg-card divide-y divide-border shadow-[0_2px_8px_rgba(25,31,40,0.02)]">
              {sectionLinks.map((link) => (
                <div
                  key={link.id}
                  onClick={() => onLinkClick?.(link)}
                >
                  <ListRow
                    left={<PlatformIcon name={link.icon} className="w-5 h-5 text-foreground/80" />}
                    title={link.title}
                    subtitle={link.subtitle}
                    badge={link.badge}
                    href={link.url}
                    isExternal={link.isExternal}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* 섹션이 지정되지 않은 링크가 있을 경우 */}
      {unassignedLinks.length > 0 && (
        <div className="flex flex-col">
          <SectionHeader title="기타 링크" count={unassignedLinks.length} />
          <div className="flex flex-col rounded-[20px] border border-border overflow-hidden bg-card divide-y divide-border shadow-[0_2px_8px_rgba(25,31,40,0.02)]">
            {unassignedLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => onLinkClick?.(link)}
              >
                <ListRow
                  left={<PlatformIcon name={link.icon} className="w-5 h-5 text-foreground/80" />}
                  title={link.title}
                  subtitle={link.subtitle}
                  badge={link.badge}
                  href={link.url}
                  isExternal={link.isExternal}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
