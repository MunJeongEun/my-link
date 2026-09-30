import mockData from "@/data/mock-links.json";
import { SectionItem, LinkItem } from "@/types/link";
import { MobileShell } from "@/components/mobile-shell";
import { ProfileHeader } from "@/components/profile-header";
import { SocialBar, SocialLinkItem } from "@/components/social-bar";
import { LinkList } from "@/components/link-list";

// 목 데이터 파싱
const sections: SectionItem[] = mockData.sections;
const links: LinkItem[] = mockData.links;

// 퀵 소셜 미디어 바 아이템 추출 (Instagram, YouTube, GitHub, LinkedIn)
const socialLinks: SocialLinkItem[] = [
  {
    id: "social-github",
    name: "GitHub",
    url: "https://github.com/MunJeongEun",
    icon: "github",
  },
  {
    id: "social-velog",
    name: "Velog",
    url: "https://velog.io/",
    icon: "velog",
  },
  {
    id: "social-instagram",
    name: "Instagram",
    url: "https://instagram.com/jeongeun.dev",
    icon: "instagram",
  },
  {
    id: "social-youtube",
    name: "YouTube",
    url: "https://youtube.com/@dev-jeongeun",
    icon: "youtube",
  },
  {
    id: "social-linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jeongeun-mun",
    icon: "linkedin",
  },
];

const skillTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Zustand",
];

export default function Home() {
  return (
    <MobileShell title="마이링크">
      {/* ── 프로필 헤더 (TDS Profile Header) ── */}
      <ProfileHeader
        name="문정은"
        role="광운대학교 · 프론트엔드 개발자"
        bio="사용자가 머무는 순간이 편안하도록 빠르고 깔끔한 웹 인터페이스를 만듭니다. 기술로 일상의 문제를 해결하는 과정을 즐겨요."
        avatarUrl="/profile.jpg"
        verifiedText="인증됨"
        primaryCta={{
          label: "이메일로 커피챗 제안하기",
          href: "mailto:jeongeun.dev@kw.ac.kr",
          isExternal: false,
        }}
      />

      {/* ── 소셜 미디어 퀵 아이콘 바 ── */}
      <div className="px-6 pb-4">
        <SocialBar items={socialLinks} />
      </div>

      {/* ── 토스 표준 구분선 (TDS standard divider) ── */}
      <div className="h-2.5 bg-secondary w-full" />

      {/* ── 섹션별 링크 목록 (TDS List-Row 컴포넌트 패턴) ── */}
      <section className="px-5 py-6">
        <LinkList sections={sections} links={links} />
      </section>

      {/* ── 관심 분야 및 기술 스택 태그 (Chip) ── */}
      <section className="px-6 py-2">
        <h2 className="text-[15px] font-semibold text-foreground mb-3 tracking-tight">
          관심 분야 및 기술
        </h2>
        <div className="flex flex-wrap gap-2">
          {skillTags.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-secondary text-foreground/80 text-[13px] font-medium hover:bg-muted transition-colors select-none"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </MobileShell>
  );
}
