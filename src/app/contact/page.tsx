"use client"
import { useTranslation } from 'react-i18next';
import Card from '../../components/card';
import { Button, Tooltip } from '@mui/material';
import { SiLemmy, SiMastodon, SiMatrix } from '@icons-pack/react-simple-icons';
import { OutgoingMail } from '@mui/icons-material';

export default function Page() {
    const { t } = useTranslation("contact");
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card height={200}>
                <p className="text-2xl font-bold text-center">
                    {t("contactTitle")}
                </p>
                <p className="text-center">
                    {t("contactDescription1")}
                </p>
                <div className="flex justify-around">
                <Button 
                    variant="contained" 
                    color="primary"
                    className="m-2"
                    href="https://furries.club/@helloyanis"
                    startIcon={
                        <SiMastodon/>
                    }
                >
                    Mastodon
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary"
                    href="https://jlai.lu/u/helloyanis"
                    startIcon={
                        <SiLemmy/>
                    }
                >
                    Lemmy
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary"
                    href="https://matrix.to/#/@helloyanis:matrix.org"
                    startIcon={
                        <SiMatrix/>
                    }
                >
                    Matrix
                </Button>
                </div>
                <p className="text-center">
                    {t("contactDescription2")}
                </p>
                <div className="flex justify-center">
                    <Tooltip title={t("hintEncryption")}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            className="m-2"
                            href="mailto:hello@xn--3s8h30f.ws"
                            startIcon={
                                <OutgoingMail/>
                            }
                        >
                            hello@🦊💻.ws
                        </Button>
                    </Tooltip>
                </div>
            </Card>
        </section>
    );
}
