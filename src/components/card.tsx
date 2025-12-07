"use client"
import { ReactNode } from 'react';


interface CardProps {
    children: ReactNode;
    height?: number;
}

export default function Card({ children }: CardProps) {

    return (
            <div className="card">
                {children}
            </div>
        );
}