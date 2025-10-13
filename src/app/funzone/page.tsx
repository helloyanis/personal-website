"use client"
import { useTranslation } from 'react-i18next';
import Card from '../../components/card';
import { Button, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import LuckTest from '@/components/luckTest';
import { ArrowForward } from '@mui/icons-material';

export default function Page() {
    const { t, i18n } = useTranslation("funzone");
    const luckAmount = Math.floor(Math.random() * 5);
    const [isReady, setIsReady] = useState(false);
    const [isLuckDialogOpen, setIsLuckDialogOpen] = useState(false);
    const handleDialogOpen = () => {
        setIsLuckDialogOpen(true);
    }
    
    useEffect(() => {
        if (i18n.isInitialized) {
        setIsReady(true);
        }
    }, [i18n.isInitialized]);
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card height={700}>
                <p className='text-xl text-center font-bold'>{t("luckTestHeadline")}</p>
                <div className="flex justify-center">
                    <Button onClick={handleDialogOpen}>{t("luckTestTitle")}</Button>
                </div>
            <LuckTest luckAmount={luckAmount} open={isLuckDialogOpen} setOpen={setIsLuckDialogOpen}/>
            </Card>
            {
                isReady ? (<p className="text-2xl font-bold text-center">{t("funLinks")}</p>) : (<Skeleton width={100} height={24} />)
            }
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
                            <ArrowForward/>
                        }
                    >
                        {t("goLink")}
                    </Button>
                </Card>
                <Card>
                    <p className="text-xl font-bold text-center">{"Tusmo"}</p>
                    <p className="text-center">{t("tusmoDescription")}</p>
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://www.tusmo.xyz/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {t("goLink")}
                    </Button>
                </Card>
                <Card>
                    <p className="text-xl font-bold text-center">{"Suika Little Planets"}</p>
                    <p className="text-center">{t("suikaPlanetsDescription")}</p>
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://www.little-planets.xyz/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {t("goLink")}
                    </Button>
                </Card>
                <Card>
                    <p className="text-xl font-bold text-center">{"TETR.IO"}</p>
                    <p className="text-center">{t("tetrioDescription")}</p>
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://tetr.io/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {t("goLink")}
                    </Button>
                </Card>
            </div>
            {
                isReady ? (<p className="text-2xl font-bold text-center">{t("friendLinks")}</p>) : (<Skeleton width={100} height={24} />)
            }
            <div className="flex flex-row justify-around flex-wrap">
            <Card>
                <div className="flex items-center">
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://riverfox.dev/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {"River's Den"}
                    </Button>
                </div>
            </Card>
            <Card>
                <div className="flex items-center">
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://s.soggy.cat/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {"CV's site"}
                    </Button>
                </div>
            </Card>
            <Card>
                <div className="flex items-center">
                    <Button 
                        variant="outlined" 
                        color="primary"
                        className="m-2"
                        href="/contact"
                    >
                        {t("addFriendLink")}
                    </Button>
                </div>
            </Card>
            </div>
        </section>
    );
}