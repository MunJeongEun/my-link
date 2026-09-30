"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { cn } from "cn";

/* ── Dialog Root ── */
const Dialog = DialogPrimitive.Root;

/* ── Dialog Trigger ── */
const DialogTrigger = DialogPrimitive.Trigger;

/* ── Dialog Close ── */
const DialogClose = DialogPrimitive.Close;

/* ── Dialog Portal ── */
const DialogPortal = DialogPrimitive.Portal;

/* ── Backdrop ── */
function DialogBackdrop({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Backdrop>) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]",
        "data-[open]:animate-in data-[open]:fade-in-0",
        "data-[closed]:animate-out data-[closed]:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

/* ── Popup (모달 본체) ── */
function DialogContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPrimitive.Portal>
      <DialogBackdrop />
      <DialogPrimitive.Popup
        className={cn(
          // 위치 & 크기
          "fixed left-1/2 top-1/2 z-50 w-full max-w-[390px] -translate-x-1/2 -translate-y-1/2",
          // TDS 카드 스타일 (라운드 20px, 흰 배경, 그림자)
          "rounded-[20px] bg-card border border-border",
          "shadow-[0_20px_60px_rgba(25,31,40,0.18),0_4px_16px_rgba(25,31,40,0.08)]",
          // 애니메이션
          "data-[open]:animate-in data-[open]:fade-in-0 data-[open]:zoom-in-95",
          "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95",
          "mx-4",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  );
}

/* ── Header 영역 ── */
function DialogHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between px-5 pt-5 pb-4 border-b border-border/60", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Title ── */
function DialogTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("text-[17px] font-bold tracking-tight text-foreground", className)}
      {...props}
    />
  );
}

/* ── Description ── */
function DialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-[13px] text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

/* ── Body 영역 ── */
function DialogBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 py-5 flex flex-col gap-4", className)} {...props} />;
}

/* ── Footer 영역 ── */
function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2 px-5 pb-5", className)}
      {...props}
    />
  );
}

/* ── Close 버튼 (아이콘) ── */
function DialogCloseButton({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      aria-label="닫기"
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center",
        "text-muted-foreground hover:bg-secondary active:scale-95 transition-all",
        className
      )}
      {...props}
    >
      <X className="w-4 h-4" />
    </DialogPrimitive.Close>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
};
