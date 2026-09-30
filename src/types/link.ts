export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon?: string; // e.g. "github", "velog", "linkedin", "code", "youtube", "instagram", "globe"
  badge?: string; // e.g. "최신글", "추천", "HOT"
  sectionId?: string; // section category reference
  order: number;
  isExternal: boolean;
  isActive: boolean;
  clickCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface SectionItem {
  id: string;
  title: string;
  order: number;
}

export interface LinksApiResponse {
  success: boolean;
  sections: SectionItem[];
  links: LinkItem[];
  total: number;
}
