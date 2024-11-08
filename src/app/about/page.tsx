"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

export default function Page() {
    const { t } = useTranslation("about");
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card>
                <p className="text-2xl font-bold text-center">
                    {t("aboutSiteTitle")}
                </p>
            </Card>
            <Card>              
                <p className="text-2xl font-bold text-center">
                    {t("aboutMeTitle")}
                </p>
            </Card>
        </section>
    );
}