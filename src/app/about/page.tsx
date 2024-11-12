"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Page() {
    const { t } = useTranslation("about");

    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card>
                <p className="text-2xl font-bold text-center">
                    {t("aboutSiteTitle")}
                </p>
                <p className="text-center">
                    {t("aboutSiteContent1")}
                </p>
                <div className="flex justify-center">
                <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://github.com/helloyanis/helloyanis.github.io"
                    startIcon={
                        <img 
                            src="/assets/icons/github-mark-white.svg"
                            alt="GitHub icon" 
                            className="icon-dark-mode w-6 h-6"
                        />
                    }
                >
                    {t("sourceCode")}
                </Button>
                </div>
                <p className="text-center">
                    {t("aboutSiteContent2")}
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
