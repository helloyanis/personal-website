"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Page() {
    const { t } = useTranslation("funzone");
    const luckAmount = Math.floor(Math.random() * 5);
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card>
                <video width="320" height="180" controls preload="none">
                <source src={`/assets/videos/luck${luckAmount}.webm`} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </Card>
        </section>
    );
}