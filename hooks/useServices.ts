// hooks/useServices.ts
"use client";

import { useEffect, useState } from "react";
import type { ServiceCard, ServiceDetail } from "../types/service";

// ─── Hook: all services (for listing page) ───────────────────────────────────

export function useServices() {
  const [services, setServices] = useState<ServiceCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/public-services/all`, {
          signal: controller.signal,
          next: { revalidate: 60 }, // ISR-friendly cache hint
        } as RequestInit);

        if (!res.ok) throw new Error("Failed to load services");

        const json = await res.json();
        // console.log("get the data in json",json)
        if (json.success) {
          setServices(json.data);
        } else {
          throw new Error(json.message || "Unknown error");
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message ?? "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
    return () => controller.abort();
  }, []);

  return { services, loading, error };
}

// ─── Hook: single service by slug ────────────────────────────────────────────

export function useService(slug: string) {
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();

    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/slug/${slug}`, {
          signal: controller.signal,
        } as RequestInit);

        if (!res.ok) throw new Error("Service not found");

        const json = await res.json();
        if (json.success) {
          setService(json.data);
        } else {
          throw new Error(json.message || "Unknown error");
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message ?? "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchService();
    return () => controller.abort();
  }, [slug]);

  return { service, loading, error };
}