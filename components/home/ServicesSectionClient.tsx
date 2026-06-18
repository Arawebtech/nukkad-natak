"use client";

import Link from "next/link";
import Image from "next/image";

import { HeadingUpdate } from "../common/HeadingUpdate";
import type { ServiceCard } from "@/types/service";

export default function ServicesSectionClient({
  services,
}: {
  services: ServiceCard[];
}) {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div>
        <HeadingUpdate
          title="Our"
          color="black"
          title2={true}
          title2Text="Services"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      <div className="servicesGrid">
        {services?.map((item) => (
          <Link
            key={item._id}
            href={`/services/${item.slug}`}
            className="gridItem"
          >
            <Image
              src={item.thumbnail?.imageUrl || "/placeholder.png"}
              alt={item.name}
              width={250}
              height={250}
              className="image"
            />

            <h3 className="title">{item.name}</h3>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .servicesGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          row-gap: 30px;
          padding: 0px 60px 60px 60px;
        }

        .gridItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
        }

        .image {
          width: 86%;
          object-fit: cover;
        }

        .title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        @media (max-width: 991px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            padding: 20px 30px 30px;
            gap: 25px;
          }

          .image {
            max-width: 130px;
          }
        }

        @media (max-width: 767px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            padding: 10px 14px 20px;
            gap: 18px;
          }

          .image {
            max-width: 100px;
            width: 95%;
            object-fit: contain;
          }

          .title {
            font-size: 10px;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  );
}
