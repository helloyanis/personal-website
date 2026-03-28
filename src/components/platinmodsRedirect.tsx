"use client"

import { Button, Dialog, DialogTitle } from "@mui/material";
import { useSearchParams } from 'next/navigation'

export default function PlatinmodsRedirect({ open }: { open: boolean}) {

      //Project is utm_campaign in URL params, and can be "gc2offline" for now, but maybe more in the future
      const project = (useSearchParams().get("utm_campaign") && useSearchParams().get("utm_campaign") === "gc2offline") ? "gc2offline" : "";

    const handleRedirect = (project: string) => {
        switch(project) {
            case "gc2offline":
                window.location.href = "https://github.com/helloyanis/Groove2offline";
                break;
            default:
                window.location.href = "https://github.com/helloyanis"; //Redirect to my github if we don't know the project, at least it's better than nothing
        }
    };

      let shouldDisplayPlatinmodsRedirect = false;
      console.log("URL params:", useSearchParams());
      if(useSearchParams().get("utm_source") === "platinmods.com") {
        shouldDisplayPlatinmodsRedirect = true;
      }

    return (
        shouldDisplayPlatinmodsRedirect ? (
        <Dialog
            open={open}
            maxWidth="sm"
            fullWidth
            >
                <DialogTitle>
                    You're coming from Platinmods!
                </DialogTitle>

                <div className="flex flex-row justify-around flex-wrap">
                    <div className="flex flex-col justify-center">
                        <p className='shrink mb-1'>Hello! It looks like you're coming from Platinmods! It's probably not a good idea to download my stuff from their site. </p>
                        <ul>
                            <li>1. The download links on Platinmods can be outdated and may not work.</li>
                            <li>2. They're trying to sell you a VIP subscription, while I made the project for free.</li>
                            <li>3. Probably for that reason, they don't provide a link to the project's page. You should always check the official sources for stuff you download!</li>
                        </ul>
                    </div>
                </div>

                <Button variant="contained" color="primary" onClick={() => handleRedirect(project)}>
                    Go to the official {project === "gc2offline" ? "Groove2offline" : "GitHub"} page
                </Button>

            </Dialog>
        ) : null
    )
}