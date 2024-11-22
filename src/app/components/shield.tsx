"use client"
import Image from "next/image"

interface ShieldProps {
    src: string;
    alt: string;
    title?: string;
    href?: string;
}

export default function Shield({ src, alt, title }: ShieldProps) {
    return (
        <Image
            src={src}
            alt={alt}
            title={title}
            className="m-1"
            width={0}
            height={0}
            style={{ width: "auto", height: "1.5rem" }}
        />
    )
}