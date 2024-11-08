"use client"
import { ReactNode } from 'react';
import { Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    const { i18n } = useTranslation("nav");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
        setIsReady(true);
        }
    }, [i18n.isInitialized]);
    if(isReady){
        return (
            <div className="card">
                {children}
            </div>
        );
    }else{
        return (
            <div className="card">
                <Skeleton width={100} height={24} />
            </div>
            
        );
    }
}