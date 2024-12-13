"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { Button } from '@mui/material';
import Image from 'next/image';

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
                        <Image
                            src="/assets/icons/mastodon.svg"
                            alt="Mastodon icon" 
                            className="w-6 h-6 filter-white"
                            width={24}
                            height={24}
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
                        <Image
                            src="/assets/icons/lemmy.svg"
                            alt="Lemmy icon" 
                            className="w-6 h-6 filter-white"
                            width={24}
                            height={24}
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
                        <Image
                            src="/assets/icons/youtube.svg"
                            alt="Youtube icon" 
                            className="w-6 h-6 filter-white"
                            width={24}
                            height={24}
                        />
                    }
                >
                    Youtube
                </Button>
                </div>
                <p className="text-center">
                    {t("contactDescription2")}
                </p>
                <div className="flex justify-center">
                <Button 
                    variant="contained" 
                    color="primary"
                    className="m-2"
                    href="mailto:hello@xn--0ci5768mq9c.ws"
                    startIcon={
                        <Image
                            src="/assets/icons/outgoing_mail.svg"
                            alt="Email icon" 
                            className="w-6 h-6"
                            width={24}
                            height={24}
                        />
                    }
                >
                    hello@🦊✨💻.ws
                </Button>
                </div>
                
            </Card>
        </section>
    );
}
