import * as React from "react";
import Image from "next/image";
import { Mail, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";

export interface ProfileHeaderProps {
  name: string;
  role?: string;
  bio?: string;
  avatarUrl?: string;
  verifiedText?: string;
  primaryCta?: {
    label: string;
    href: string;
    icon?: LucideIcon;
    isExternal?: boolean;
  };
  className?: string;
}

export function ProfileHeader({
  name,
  role,
  bio,
  avatarUrl = "/profile.jpg",
  verifiedText = "인증됨",
  primaryCta = {
    label: "이메일로 커피챗 제안하기",
    href: "mailto:jeongeun.dev@kw.ac.kr",
    icon: Mail,
  },
  className,
}: ProfileHeaderProps) {
  const IconComponent = primaryCta.icon || Mail;

  return (
    <section className={cn("px-6 pt-8 pb-6 flex flex-col items-center text-center", className)}>
      {/* 아바타 슬롯 (TDS 규격 둥근 테두리 및 그림자) */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border shadow-[0_4px_12px_rgba(25,31,40,0.06)] mb-4 bg-secondary">
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          fill
          sizes="96px"
          className="object-cover"
          priority
        />
      </div>

      {/* 이름 & 인증 뱃지 */}
      <div className="flex items-center gap-2 mb-1.5">
        <h1 className="text-[24px] font-bold tracking-tight text-foreground">
          {name}
        </h1>
        {verifiedText && (
          <Badge
            variant="secondary"
            className="bg-accent text-accent-foreground text-[11px] font-semibold px-2 py-0.5 rounded-full border-none"
          >
            {verifiedText}
          </Badge>
        )}
      </div>

      {/* 역할 / 태그 */}
      {role && (
        <p className="text-[14px] font-medium text-muted-foreground mb-3">
          {role}
        </p>
      )}

      {/* 소개글 (토스 해요체 톤앤매너) */}
      {bio && (
        <p className="text-[15px] leading-relaxed text-foreground/80 max-w-[320px] break-keep font-normal">
          {bio}
        </p>
      )}

      {/* 단일 강조색(Toss Blue: #3182F6) Primary CTA (화면당 오직 하나) */}
      {primaryCta && (
        <div className="w-full mt-6">
          <a
            href={primaryCta.href}
            target={primaryCta.isExternal ? "_blank" : undefined}
            rel={primaryCta.isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center gap-2 w-full h-14 bg-primary hover:bg-primary/90 active:scale-[0.99] text-primary-foreground font-bold text-[16px] rounded-[16px] shadow-[0_4px_12px_rgba(49,130,246,0.24)] transition-all"
          >
            <IconComponent className="w-5 h-5 text-primary-foreground" />
            <span>{primaryCta.label}</span>
          </a>
        </div>
      )}
    </section>
  );
}
