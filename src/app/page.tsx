import Image from "next/image";

const links = [
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900",
  },
  {
    href: "mailto:example@email.com",
    label: "이메일 보내기",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    color: "hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-zinc-900",
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-zinc-900",
  },
  {
    href: "https://velog.io/",
    label: "블로그",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h12v2H3v-2z" />
      </svg>
    ),
    color: "hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-zinc-900",
  },
];

const skills = [
  { label: "React", emoji: "⚛️" },
  { label: "Next.js", emoji: "▲" },
  { label: "TypeScript", emoji: "🔷" },
  { label: "Tailwind CSS", emoji: "🎨" },
  { label: "UI/UX", emoji: "✨" },
  { label: "Problem Solver", emoji: "💡" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-violet-50 via-indigo-50 to-sky-50 dark:from-zinc-950 dark:via-indigo-950 dark:to-zinc-900">
      {/* 배경 장식 블러 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-800/20" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-800/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl dark:bg-sky-900/20" />
      </div>

      {/* 카드 */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-indigo-100/50 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-indigo-950/50 flex flex-col items-center gap-6 transition-all">

        {/* 프로필 이미지 */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-indigo-500 to-sky-400 blur-md opacity-60 scale-110" />
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-zinc-800 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="문정은 프로필 사진"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* 온라인 표시 */}
          <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-emerald-400 shadow-sm dark:border-zinc-800" />
        </div>

        {/* 이름 & 역할 */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            문정은
          </h1>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Frontend Developer
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/60 dark:text-violet-300">
              🎓 광운대학교
            </span>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-700" />

        {/* 소개글 */}
        <p className="text-center text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xs sm:max-w-sm">
          React와 Next.js로 웹을 만드는 프론트엔드 개발자입니다.&nbsp;
          UI/UX에 관심이 많고, 읽기 좋은 코드와 빠른 사용자 경험을 함께 추구합니다.
          매일 조금씩 더 나은 코드를 작성하는 것이 목표예요.&nbsp;☕
        </p>

        {/* 스킬 태그 */}
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map(({ label, emoji }) => (
            <span
              key={label}
              className="rounded-full bg-zinc-100/80 px-3 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200 transition-colors hover:bg-indigo-50 hover:text-indigo-700 hover:ring-indigo-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-300 dark:hover:ring-indigo-800"
            >
              {emoji} {label}
            </span>
          ))}
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-700" />

        {/* 링크 버튼들 */}
        <div className="w-full flex flex-col gap-3">
          {links.map(({ href, label, icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 w-full rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-5 py-3.5 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200 ${color}`}
            >
              {icon}
              <span className="flex-1">{label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 opacity-40">
                <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* 하단 */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} 문정은. All rights reserved.
        </p>
      </div>
    </main>
  );
}
