import { fetchServices } from "@/lib/api";
import ServicesSectionClient from "./ServicesSectionClient";

export default async function ServicesSection() {
  const services = await fetchServices();

  return <ServicesSectionClient services={services} />;
}
