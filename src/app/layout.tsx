import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "문정은 프로필 | 마이링크",
  description: "웹과 모바일에서 빠르고 사용하기 편한 경험을 만드는 프론트엔드 개발자 문정은입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
