"use client"
import { ReactNode } from 'react';


interface GridProps {
    itemW: int;
    gap: int;
    className: string;
    children: ReactNode;
}

export default function Grid({ itemW=380, gap=4, className="", children }: GridProps) {
    return (
        <div className={
            `grid grid-cols-1 gap-${gap} md:grid-cols-[repeat(auto-fill,minmax(${itemW}px,1fr))] ${className}`.trim()
        }>
            {children}
        </div>
    );
}