import React from "react";
import type { ReactNode } from "react";
import Image from "next/image";

export default function ShowcaseCard({
  icon,
  title,
  desc,
  img,
  stats,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  img: string;
  stats: { label: string; value: string }[];
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
        <h3 className="flex items-center gap-4 text-lg font-bold">
          {title} {icon}
        </h3>
        <p className="mt-1 text-fd-muted-foreground ">{desc}</p>
      </div>
      {stats.length > 0 && (
        <div className="flex flex-row items-center justify-center gap-4 md:gap-6 md:absolute w-max mx-auto mb-5 md:mb-0 md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:translate-y-[100%] md:transition md:group-hover:-translate-y-4">
          {stats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border backdrop-blur-lg p-3 px-5 shadow-sm min-w-[100px]">
      <div className="text-blue-400 text-2xl font-extrabold leading-none">{value}</div>
      <div className="text-sm text-fd-muted-foreground whitespace-nowrap leading-none">{label}</div>
    </div>
  );
}
