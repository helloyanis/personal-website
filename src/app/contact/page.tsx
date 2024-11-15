"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const { t } = useTranslation("contact");
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card>
                <p className="text-2xl font-bold text-center">
                    {t("contactTitle")}
                </p>
                <p className="text-center">
                    {t("contactDescription1")}
                </p>
                <div className="flex justify-center">
                <Button 
                    variant="contained" 
                    color="primary"
                    className="m-2"
                    href="https://piaille.fr/@helloyanis"
                    startIcon={
                        <img
                            src="/assets/icons/mastodon.svg"
                            alt="Mastodon icon" 
                            className="w-6 h-6"
                        />
                    }
                >
                    Mastodon
                </Button>
                <Button 
                    variant="contained" 
                    color="primary"
                    className="m-2"
                    href="https://jlai.lu/u/helloyanis"
                    startIcon={
                        <img
                            src="/assets/icons/lemmy.svg"
                            alt="Lemmy icon" 
                            className="w-6 h-6"
                        />
                    }
                >
                    Lemmy
                </Button>
                <Button 
                    variant="contained" 
                    color="primary"
                    className="m-2"
                    href="https://www.youtube.com/@helloyanis"
                    startIcon={
                        <img
                            src="/assets/icons/youtube.svg"
                            alt="Youtube icon" 
                            className="w-6 h-6"
                        />
                    }
                >
                    Youtube
                </Button>
                </div>
                <p className="text-center">
                    {t("aboutSiteContent2")}
                </p>
                
            </Card>
        </section>
    );
}
