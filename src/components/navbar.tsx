"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Skeleton, Button } from '@mui/material';

export default function Navbar() {
  const { t, i18n, ready } = useTranslation("nav");
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    setIsReady(ready);
  }, [ready]);

  return (
    <>
    <nav className="p-4">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex space-x-4 text-center whitespace-nowrap overflow-x-auto">
          <Link href="/" className="nav-link" shallow>
            {isReady ? (
              <Button
                variant={isActive("/") ? "contained" : "outlined"}
                color="primary"
              >
                🏠<br/>{t("home")}
              </Button>
            ) : <Skeleton width={60} height={60} /> }
          </Link>
          <Link href="/about" className="nav-link" shallow>
            {isReady ? (
              <Button 
                variant={isActive("/about") ? "contained" : "outlined"}
                color="primary"
              >
                ℹ️<br/>{t("about")}
              </Button>
            ) : <Skeleton width={60} height={60} /> }
          </Link>
          <Link href="/contact" className="nav-link" shallow>
            {isReady ? (
              <Button 
                variant={isActive("/contact") ? "contained" : "outlined"}
                color="primary"
              >
                💬<br/>{t("contact")}
              </Button>
            ) : <Skeleton width={60} height={60} /> }
          </Link>
          <Link href="/funzone" className="nav-link" shallow>
            {isReady ? (
              <Button
                variant={isActive("/funzone") ? "contained" : "outlined"}
                color="primary"
              >
                🕹️<br/>{t("funzone")}
              </Button>
            ) : <Skeleton width={60} height={60} /> }
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