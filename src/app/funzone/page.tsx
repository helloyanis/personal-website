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
    const fun_links = [
        {
            title: "The Useless Web",
            description: t("theUselessWebDescription"),
            url: "https://theuselessweb.com/"
        },
        {
            title: "Tusmo",
            description: t("tusmoDescription"),
            url: "https://www.tusmo.xyz/"
        },
        {
            title: "Suika Little Planets",
            description: t("suikaPlanetsDescription"),
            url: "https://www.little-planets.xyz/"
        },
        {
            title: "TETR.IO",
            description: t("tetrioDescription"),
            url: "https://tetr.io/"
        }
    ]
    const other_people = [
        {
            title: "River's Den",
            url: "https://riverfox.dev/"
        },
        {
            title: "CV's site",
            url: "https://s.soggy.cat/"
        },
        {
            title: "Trifito's site",
            url: "https://tirifto.xwx.moe/"
        },
        {
            title: t("addFriendLink"),
            url: "/contact"
        }
    ]
    return (
        <section className="flex flex-col gap-4 p-4">
            <Card height={700}>
                <p className='text-xl text-center font-bold'>{!ready ? <Skeleton/> : t("luckTestHeadline")}</p>
                <div className="flex justify-center mt-4">
                    <Button variant="outlined" onClick={handleDialogOpen}>{!ready ? <Skeleton/> : t("luckTestTitle")}</Button>
                </div>
            <LuckTest luckAmount={luckAmount} open={isLuckDialogOpen} setOpen={setIsLuckDialogOpen}/>
            </Card>
            {
                ready ? (<p className="text-2xl font-bold text-center">{!ready ? <Skeleton/> : t("funLinks")}</p>) : (<Skeleton width={100} height={24} />)
            }
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {fun_links.map((item, index)=>(
                    <div className="card flex flex-col gap-2" key={index}>
                        <p className="text-xl font-bold text-center">{item.title}</p>
                        <p className="text-center">{!ready ? <Skeleton/> : item.description}</p>
                        <div className="mt-auto flex flex-col">
                            <Button 
                                variant="contained" 
                                color="primary"
                                href={item.url}
                                startIcon={<ArrowForward/>}
                                className="mt-auto"
                            >
                                {!ready ? <Skeleton width={200}/> : t("goLink")}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            {
                ready ? (<p className="text-2xl font-bold text-center">{!ready ? <Skeleton width={50}/> : t("friendLinks")}</p>) : (<Skeleton width={100} height={24} />)
            }
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {other_people.map((item, index)=>(
                    <div className="card flex justify-center" key={index}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            className="m-2"
                            href={item.url}
                            startIcon={
                                <ArrowForward/>
                            }
                        >
                            {item.title}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}