"use client";

import * as React from "react";
import { Plus, Link2, Trash2, GripVertical } from "lucide-react";
import { MobileShell } from "@/components/mobile-shell";
import { LinkItem } from "@/types/link";
import { PlatformIcon } from "@/components/icons";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import mockData from "@/data/mock-links.json";

/* ── 로컬 스토리지 키 ── */
const LS_KEY = "mylink:links";

function loadLinks(): LinkItem[] {
  if (typeof window === "undefined") return mockData.links as LinkItem[];
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as LinkItem[];
  } catch {
    // ignore
  }
  return mockData.links as LinkItem[];
}

function saveLinks(links: LinkItem[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(links));
  } catch {
    // ignore
  }
}

/* ── 내 링크 관리 페이지 ── */
export default function MyPage() {
  const [links, setLinks] = React.useState<LinkItem[]>([]);
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [titleError, setTitleError] = React.useState("");
  const [urlError, setUrlError] = React.useState("");
  const [open, setOpen] = React.useState(false);

  /* 초기 로드 */
  React.useEffect(() => {
    setLinks(loadLinks());
  }, []);

  /* 유효성 검사 */
  function validate() {
    let valid = true;
    if (!title.trim()) {
      setTitleError("링크 제목을 입력해 주세요.");
      valid = false;
    } else {
      setTitleError("");
    }
    if (!url.trim()) {
      setUrlError("주소를 입력해 주세요.");
      valid = false;
    } else if (!/^https?:\/\/.+/.test(url.trim()) && !/^mailto:.+/.test(url.trim())) {
      setUrlError("올바른 URL 형식으로 입력해 주세요. (https://...)");
      valid = false;
    } else {
      setUrlError("");
    }
    return valid;
  }

  /* 링크 추가 */
  function handleAdd() {
    if (!validate()) return;

    const now = new Date().toISOString();
    const newLink: LinkItem = {
      id: `link-${Date.now()}`,
      title: title.trim(),
      url: url.trim(),
      order: links.length + 1,
      isExternal: url.trim().startsWith("http"),
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    const next = [...links, newLink];
    setLinks(next);
    saveLinks(next);

    /* 폼 초기화 후 다이얼로그 닫기 */
    setTitle("");
    setUrl("");
    setTitleError("");
    setUrlError("");
    setOpen(false);
  }

  /* 링크 삭제 */
  function handleDelete(id: string) {
    const next = links.filter((l) => l.id !== id);
    setLinks(next);
    saveLinks(next);
  }

  /* 다이얼로그 열기/닫기 시 폼 초기화 */
  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setTitle("");
      setUrl("");
      setTitleError("");
      setUrlError("");
    }
  }

  return (
    <MobileShell title="내 링크 관리">
      {/* ── 상단 헤더 ── */}
      <section className="px-5 pt-6 pb-2">
        <h1 className="text-[22px] font-bold tracking-tight text-foreground">내 링크 관리</h1>
        <p className="text-[13px] text-muted-foreground mt-1">
          링크를 추가하고 공개 프로필에서 보여줄 수 있어요.
        </p>
      </section>

      {/* ── 링크 추가 버튼 (다이얼로그 트리거) ── */}
      <section className="px-5 pt-4 pb-2">
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger
            className="w-full h-12 rounded-[14px] flex items-center justify-center gap-2 text-[15px] font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: "#5B5FC7" }}
          >
            <Plus className="w-5 h-5" />
            링크 추가하기
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>링크 추가</DialogTitle>
              <DialogCloseButton />
            </DialogHeader>

            <DialogBody>
              {/* 제목 입력 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-foreground/80">
                  링크 제목
                </label>
                <Input
                  placeholder="링크 제목 입력"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (titleError) setTitleError("");
                  }}
                  aria-invalid={!!titleError}
                  autoFocus
                />
                {titleError && (
                  <p className="text-[12px] text-destructive">{titleError}</p>
                )}
              </div>

              {/* 주소 입력 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-foreground/80">
                  링크 주소
                </label>
                <Input
                  type="url"
                  placeholder="https://..."
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (urlError) setUrlError("");
                  }}
                  aria-invalid={!!urlError}
                  leftSlot={<Link2 className="w-4 h-4" />}
                />
                {urlError && (
                  <p className="text-[12px] text-destructive">{urlError}</p>
                )}
              </div>
            </DialogBody>

            <DialogFooter>
              <button
                type="button"
                onClick={handleAdd}
                className="w-full h-12 rounded-[14px] text-[15px] font-bold text-white transition-all active:scale-[0.98] hover:opacity-90"
                style={{ backgroundColor: "#5B5FC7" }}
              >
                추가하기
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* ── 구분선 ── */}
      <div className="mx-5 my-4 h-px bg-border/60" />

      {/* ── 링크 목록 ── */}
      <section className="px-5 pb-8 flex flex-col gap-3">
        {links.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
            <div className="w-14 h-14 rounded-[18px] bg-secondary flex items-center justify-center">
              <Link2 className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-[15px] font-semibold text-foreground/70">
              아직 등록된 링크가 없어요
            </p>
            <p className="text-[13px] text-muted-foreground">
              위 버튼을 눌러 첫 번째 링크를 추가해 보세요.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[12px] font-semibold text-muted-foreground tracking-wider uppercase">
              등록된 링크 {links.length}개
            </p>
            <div className="flex flex-col rounded-[20px] border border-border overflow-hidden bg-card divide-y divide-border shadow-[0_2px_8px_rgba(25,31,40,0.02)]">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="group flex items-center justify-between px-4 py-3.5 hover:bg-secondary/50 transition-colors"
                >
                  {/* 드래그 핸들 (시각적 힌트) */}
                  <GripVertical className="w-4 h-4 text-muted-foreground/40 shrink-0 mr-3 cursor-grab" />

                  {/* 아이콘 슬롯 */}
                  <div className="w-10 h-10 rounded-[12px] bg-secondary flex items-center justify-center shrink-0 mr-3">
                    <PlatformIcon name={link.icon} className="w-5 h-5 text-foreground/70" />
                  </div>

                  {/* 텍스트 */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[14px] font-semibold text-foreground truncate">
                      {link.title}
                    </span>
                    <span className="text-[12px] text-muted-foreground truncate mt-0.5">
                      {link.url}
                    </span>
                  </div>

                  {/* 삭제 버튼 */}
                  <button
                    type="button"
                    aria-label={`${link.title} 삭제`}
                    onClick={() => handleDelete(link.id)}
                    className="ml-3 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground/50 hover:text-destructive hover:bg-destructive/10 transition-all opacity-0 group-hover:opacity-100 active:scale-95 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </MobileShell>
  );
}
