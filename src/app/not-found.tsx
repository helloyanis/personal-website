"use client"
import "@/app/i18n";
import { Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const { t, i18n } = useTranslation();
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        if (i18n.isInitialized) {
        setIsReady(true);
        }
    }, [i18n.isInitialized]);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {
                isReady ? (
                    <>
                        <h1 className="text-4xl font-bold mb-4">{t("notFoundTitle")}</h1>
                        <p className="text-lg text-center">{t("notFoundDescription")}</p>
                    </>
                ) : (
                    <>
                        <Skeleton width={300} height={48} className="mb-4"/>
                        <Skeleton width={400} height={24} />
                    </> 
                )
            }
        </div>
    )
}