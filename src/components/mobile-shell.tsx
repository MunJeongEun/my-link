"use client";

import * as React from "react";
import { Share2 } from "lucide-react";
import { cn } from "cn";

export interface MobileShellProps {
  children: React.ReactNode;
  title?: string;
  onShare?: () => void;
  className?: string;
}

export function MobileShell({
  children,
  title = "마이링크",
  onShare,
  className,
}: MobileShellProps) {
  const handleShare = () => {
    if (onShare) {
      onShare();
      return;
    }
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 클립보드에 복사되었어요.");
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-start sm:py-10 px-4 sm:px-0">
      {/* ── 토스 모바일 셸 규격 (최대 너비 430px 단일 컬럼) ── */}
      <div
        className={cn(
          "w-full max-w-[430px] flex flex-col min-h-screen sm:min-h-0 sm:rounded-[32px] sm:shadow-[0_12px_32px_rgba(25,31,40,0.06),0_2px_6px_rgba(25,31,40,0.04)] bg-card overflow-hidden pb-12 sm:border sm:border-border",
          className
        )}
      >
        {/* 상단 네비게이션 바 (Top App Bar) */}
        <header className="h-14 px-5 flex items-center justify-between border-b border-border/50 sticky top-0 bg-card/95 backdrop-blur-sm z-20">
          <span className="text-[17px] font-bold tracking-tight text-foreground">
            {title}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleShare}
              aria-label="링크 공유하기"
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-secondary active:scale-95 transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        {children}

        {/* ── 푸터 ── */}
        <footer className="mt-8 px-6 pt-6 border-t border-border/50 text-center">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            마이링크 · 토스 디자인 시스템(TDS) & shadcn/ui 기반 프로필
          </p>
          <p className="text-[11px] text-muted-foreground/60 mt-1">
            © {new Date().getFullYear()} 문정은. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
