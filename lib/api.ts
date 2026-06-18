import type { ServiceCard, ServiceDetail } from "@/types/service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchServices(): Promise<ServiceCard[]> {
  if (!API_URL) return [];

  try {
    const res = await fetch(`${API_URL}/services`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const response = await res.json();
    return response?.data ?? [];
  } catch {
    return [];
  }
}

export async function fetchServiceBySlug(slug: string): Promise<ServiceDetail | null> {
  if (!API_URL) return null;

  try {
    const res = await fetch(`${API_URL}/services/slug/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data?.data ?? null;
  } catch {
    return null;
  }
}
