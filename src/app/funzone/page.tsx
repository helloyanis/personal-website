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
            <p className="text-2xl font-bold text-center">{t("luckTestTitle")}</p>
                <div className="flex flex-row justify-around flex-wrap">
                    
                    <video width="640" height="360" controls preload="none">
                    <source src={`/assets/videos/luck${luckAmount}.webm`} type="video/mp4" className="grow"/>
                    Your browser does not support the video tag.
                    </video>
                    <div className="flex flex-col justify-center">
                        <p className='shrink mb-1'>{t("luckTestDescription")}</p>
                        <p id="lyrics">
                            🎵 Flipnic, flipnic, will you answer me?<br/>
                            Will I have, luck today, will I have a wonderful day?<br/>
                            <br/>
                            🎤 Yes, yes, I will answer for you,<br/>
                            If you would like to know...<br/>
                            I hope the best, and here it is...<br/>
                            <i>✨ Then hear your prediction!</i>
                        </p>
                    </div>
                </div>
            </Card>
            <p className="text-2xl font-bold text-center">{t("funLinks")}</p>
            <div className="flex flex-row justify-around flex-wrap">
                <Card>
                    <p className="text-xl font-bold text-center">{"The Useless Web"}</p>
                    <p className="text-center">{t("theUselessWebDescription")}</p>
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://theuselessweb.com/"
                        startIcon={
                            <Image
                                src="/assets/icons/link.svg"
                                alt="Link icon" 
                                className="w-6 h-6"
                                width={0}
                                height={0}
                                style={{ width: "auto", height: "1.5rem" }}
                            />
                        }
                    >
                        {t("goLink")}
                    </Button>
                </Card>
            </div>
        </section>
    );
}