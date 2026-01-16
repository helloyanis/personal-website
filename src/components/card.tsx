"use client"
import { ReactNode } from 'react';


interface CardProps {
    className: string;
    children: ReactNode;
    height?: number;
}

export default function Card({ className="", children }: CardProps) {
    return (
        <div className={`card ${className}`.trim()}>
            {children}
        </div>
    );
}