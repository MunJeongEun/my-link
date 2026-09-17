export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-800 dark:text-zinc-200">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 text-center flex flex-col items-center gap-5 transition-all">
        {/* 프로필 아바타 */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-3xl font-bold text-white shadow-md">
          문
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-900" />
        </div>

        {/* 이름 및 역할 태그 */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            문정은
          </h1>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Student &middot; Learner
          </p>
        </div>

        {/* 소개글 */}
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 관심사 / 스킬 태그 */}
        <div className="flex flex-wrap justify-center gap-2 pt-1">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            💻 바이브 코딩
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            🎓 대학생
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            🚀 Next.js
          </span>
        </div>

        {/* 하단 구분선 및 간단한 링크/연락 안내 */}
        <div className="w-full border-t border-zinc-100 dark:border-zinc-800/80 pt-5 mt-1">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} 문정은. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
