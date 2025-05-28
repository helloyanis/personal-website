"use client"

import { Dialog, DialogTitle, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LuckTest({ luckAmount, open, setOpen }: { luckAmount: number, open: boolean, setOpen: (open: boolean) => void }) {
    const { t, i18n } = useTranslation("funzone");
    const [isReady, setIsReady] = useState(false);
    
    useEffect(() => {
        if (i18n.isInitialized) {
          setIsReady(true);
        }
    }, [i18n.isInitialized]);
    
    return (
        <Dialog
            open={open}
            onClose={() => {setOpen(false)}}
            maxWidth="sm"
            fullWidth
            >
                <DialogTitle>
                    {isReady ? t("luckTestTitle") : <Skeleton variant="text" />}
                </DialogTitle>

                <div className="flex flex-row justify-around flex-wrap">
                    <video width="640" height="360" id="lucktestvideo" controls suppressHydrationWarning={true}>
                    <source src={`/assets/videos/luck${luckAmount}.webm`} type="video/mp4" className="grow" />
                        Your browser does not support the video tag! Wow, are you viewing this on Internet Explorer or something?
                    </video>
                    <div className="flex flex-col justify-center">
                        <p className='shrink mb-1'>{t("luckTestDescription")}</p>
                    </div>
                </div>

            </Dialog>
    )
}