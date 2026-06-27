// import { fetchServices } from "@/lib/api";
// import ServicesSectionClient from "./ServicesSectionClient";

// export default async function ServicesSection() {
//   const services = await fetchServices();

//   return <ServicesSectionClient services={services} />;
// }


import { fetchServices } from "@/lib/api";
import ServicesSectionClient from "./ServicesSectionClient";

export default async function ServicesSection() {
  const services = await fetchServices();

  const servicesWithThumbnail =
    services?.filter(
      (service) => !!service?.thumbnail?.imageUrl
    ) ?? [];

  return <ServicesSectionClient services={servicesWithThumbnail} />;
}