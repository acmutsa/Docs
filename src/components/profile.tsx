import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  image: string;
  link: string;
  alt: string;
}

export default function Profile({ image, link, alt }: ProfileProps) {
  return (
    <div className="">
      <Link target="_blank" href={link}>
        <Image
          className="w-12 h-12 rounded-3xl"
          src={image}
          width={600}
          height={600}
          alt={alt}
        />
      </Link>
    </div>
  );
}
