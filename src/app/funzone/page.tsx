"use client"
import "@/app/i18n";
import { useTranslation } from 'react-i18next';
import Card from '../../components/card';
import { Button, Skeleton } from '@mui/material';
import { useState } from 'react';
import LuckTest from '@/components/luckTest';
import { ArrowForward } from '@mui/icons-material';

export default function Page() {
    const { t, ready } = useTranslation("funzone");
    const luckAmount = Math.floor(Math.random() * 5);
    const [isLuckDialogOpen, setIsLuckDialogOpen] = useState(false);
    const handleDialogOpen = () => {
        setIsLuckDialogOpen(true);
    }
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card height={700}>
                <p className='text-xl text-center font-bold'>{!ready ? <Skeleton/> : t("luckTestHeadline")}</p>
                <div className="flex justify-center">
                    <Button onClick={handleDialogOpen}>{!ready ? <Skeleton/> : t("luckTestTitle")}</Button>
                </div>
            <LuckTest luckAmount={luckAmount} open={isLuckDialogOpen} setOpen={setIsLuckDialogOpen}/>
            </Card>
            {
                ready ? (<p className="text-2xl font-bold text-center">{!ready ? <Skeleton/> : t("funLinks")}</p>) : (<Skeleton width={100} height={24} />)
            }
            <div className="flex flex-row justify-around flex-wrap">
                <Card>
                    <p className="text-xl font-bold text-center">{"The Useless Web"}</p>
                    <p className="text-center">{!ready ? <Skeleton/> : t("theUselessWebDescription")}</p>
                    <div className="flex-grow" />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://theuselessweb.com/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {!ready ? <Skeleton width={200}/> : t("goLink")}
                    </Button>
                </Card>
                <Card>
                    <p className="text-xl font-bold text-center">{"Tusmo"}</p>
                    <p className="text-center">{!ready ? <Skeleton width={200}/> : t("tusmoDescription")}</p>
                    <div className="flex-grow" />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://www.tusmo.xyz/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {!ready ? <Skeleton width={50}/> : t("goLink")}
                    </Button>
                </Card>
                <Card>
                    <p className="text-xl font-bold text-center">{"Suika Little Planets"}</p>
                    <p className="text-center">{!ready ? <Skeleton width={200}/> : t("suikaPlanetsDescription")}</p>
                    <div className="flex-grow" />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://www.little-planets.xyz/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {!ready ? <Skeleton width={50}/> : t("goLink")}
                    </Button>
                </Card>
                <Card>
                    <p className="text-xl font-bold text-center">{"TETR.IO"}</p>
                    <p className="text-center">{!ready ? <Skeleton width={200}/> : t("tetrioDescription")}</p>
                    <div className="flex-grow" />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://tetr.io/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {!ready ? <Skeleton/> : t("goLink")}
                    </Button>
                </Card>
            </div>
            {
                ready ? (<p className="text-2xl font-bold text-center">{!ready ? <Skeleton width={50}/> : t("friendLinks")}</p>) : (<Skeleton width={100} height={24} />)
            }
            <div className="flex flex-row justify-around flex-wrap">
            <Card>
                <div className="flex items-center justify-center">
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
                <div className="flex items-center justify-center">
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
                <div className="flex items-center justify-center">
                    <Button 
                        variant="contained" 
                        color="primary"
                        className="m-2"
                        href="https://tirifto.xwx.moe/"
                        startIcon={
                            <ArrowForward/>
                        }
                    >
                        {"Trifito's site"}
                    </Button>
                </div>
            </Card>
            <Card>
                <div className="flex items-center justify-center">
                    <Button 
                        variant="outlined" 
                        color="primary"
                        className="m-2"
                        href="/contact"
                    >
                        {!ready ? <Skeleton width={50}/> : t("addFriendLink")}
                    </Button>
                </div>
            </Card>
            </div>
        </section>
    );
}