"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Alert, Button, FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';

export default function Navbar() {
  const { t, i18n } = useTranslation("nav");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);

  return (
    <>
      {isReady ? (
      <Alert severity="info"
        action={
          <Button href='https://eci.ec.europa.eu/045/public/#/screen/home' target='_blank' rel='noopener noreferrer' variant="outlined">
          <span>{t("skgbutton")}</span>
          </Button>
        }>
          <span>{t("skgbanner")}</span>
      </Alert>
      ) : (
        <Skeleton width={"100%"} height={50} />
      )}
    <nav className="p-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex space-x-4 text-center">
          <Link href="/" className="nav-link" shallow>
            <div>
              {isReady ? (
                <span>{"🏠"}<br />{t("home")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
          <Link href="/about" className="nav-link" shallow>
            <div>
              {isReady ? (
                <span>{"ℹ️"}<br />{t("about")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
          <Link href="/contact" className="nav-link" shallow>
            <div>
              {isReady ? (
                <span>{"💬"}<br />{t("contact")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
          <Link href="/funzone" className="nav-link" shallow>
            <div>
              {isReady ? (
                <span>{"🕹️"}<br />{t("funzone")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
        </div>
        {isReady ? (
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginTop: 1 }}>
            <InputLabel id="language">{t("language")}</InputLabel>
            <Select
              labelId='language'
              value={i18n.language}
              label="Language"
              onChange={(e) => i18n.changeLanguage(e.target.value as string)}
            >
              <MenuItem value={"fr"}>🇫🇷 Français</MenuItem>
              <MenuItem value={"en"}>🇬🇧 English</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <Skeleton width={100} height={45} />
        )}
      </div>
    </nav>
    </>
  );
}