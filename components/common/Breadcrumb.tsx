"use client";

import React from "react";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div style={styles.wrapper}>
      {items.map((item, index) => (
        <div key={index} style={styles.item}>
          {item.href ? (
            <a href={item.href} style={styles.link}>
              {item.label}
            </a>
          ) : (
            <span style={styles.active}>{item.label}</span>
          )}
          {index !== items.length - 1 && (
            <span style={styles.separator}>›</span>
          )}
        </div>
      ))}
    </div>
  );
};

const styles: any = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "14px",
    color: "#ccc",
    gap: "6px",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#f5c542",
    textDecoration: "none",
  },
  active: {
    color: "#fff",
  },
  separator: {
    margin: "0 6px",
    color: "#888",
  },
};

export default Breadcrumb;