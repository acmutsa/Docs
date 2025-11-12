import React from "react";
import type { ReactNode } from "react";
import Image from "next/image";

export default function ShowcaseCard({
  icon,
  title,
  desc,
  img,
  label,
  value,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  img: string;
  label: string;
  value: string;
}) {
  return (
    <div className="group relative rounded-2xl border text-left shadow-sm transition hover:cursor-pointer hover:shadow-md overflow-hidden">
      <div className="relative transition p-6 md:group-hover:-translate-y-[25%]">
        <Image 
          className="rounded-xl mb-2"
          src={img}
          width={500}
          height={500}
          alt={title}
        />
        <h3 className="flex items-center gap-4 text-lg font-bold">{title} {icon}</h3>
        <p className="mt-1 text-fd-muted-foreground ">{desc}</p>
      </div>
      <Stat 
        label={label}
        value={value}
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="md:absolute w-fit mb-5 md:mb-0 mx-5 md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:translate-y-[100%] rounded-2xl border backdrop-blur-lg p-3 md:transition md:group-hover:-translate-y-4 text-center">
      <div className="text-blue-400 text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-fd-muted-foreground">{label}</div>
    </div>
  );
}