import { NextResponse } from "next/server";
import mockData from "@/data/mock-links.json";
import { LinkItem, LinksApiResponse } from "@/types/link";

// In-memory 데이터 (서버 실행 중 상태 유지용 Mock)
const linksState: LinkItem[] = [...mockData.links];
const sectionsState = [...mockData.sections];

/**
 * GET /api/links
 * 링크 목록 및 섹션 헤더 조회
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sectionId = searchParams.get("sectionId");
  const activeOnly = searchParams.get("active") === "true";

  let filtered = [...linksState];

  if (activeOnly) {
    filtered = filtered.filter((link) => link.isActive);
  }

  if (sectionId) {
    filtered = filtered.filter((link) => link.sectionId === sectionId);
  }

  // order 기준 오름차순 정렬
  filtered.sort((a, b) => a.order - b.order);

  const response: LinksApiResponse = {
    success: true,
    sections: sectionsState.sort((a, b) => a.order - b.order),
    links: filtered,
    total: filtered.length,
  };

  return NextResponse.json(response, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}

/**
 * POST /api/links
 * 새 링크 추가 Mock 엔드포인트
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, url, subtitle, icon, badge, sectionId, isExternal } = body;

    if (!title || !url) {
      return NextResponse.json(
        { success: false, message: "title과 url은 필수 항목입니다." },
        { status: 400 }
      );
    }

    const newLink: LinkItem = {
      id: `link-${Date.now()}`,
      title,
      url,
      subtitle: subtitle || "",
      icon: icon || "globe",
      badge: badge || undefined,
      sectionId: sectionId || undefined,
      order: linksState.length + 1,
      isExternal: isExternal ?? true,
      isActive: true,
      clickCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    linksState.push(newLink);

    return NextResponse.json(
      {
        success: true,
        message: "링크가 성공적으로 추가되었습니다.",
        data: newLink,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
