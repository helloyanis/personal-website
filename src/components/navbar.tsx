"use client"
import "@/app/i18n"; // Ensure i18n is initialized
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';

export default function Navbar() {
  const { t, i18n, ready } = useTranslation("nav");

  return (
    <>
    <nav className="p-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex space-x-4 text-center">
          <Link href="/" className="nav-link" shallow>
            <div>
              {ready ? (
                <span>{"🏠"}<br />{t("home")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
          <Link href="/about" className="nav-link" shallow>
            <div>
              {ready ? (
                <span>{"ℹ️"}<br />{t("about")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
          <Link href="/contact" className="nav-link" shallow>
            <div>
              {ready ? (
                <span>{"💬"}<br />{t("contact")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
          <Link href="/funzone" className="nav-link" shallow>
            <div>
              {ready ? (
                <span>{"🕹️"}<br />{t("funzone")}</span>
              ) : (
                <Skeleton width={100} height={45} />
              )}
            </div>
          </Link>
        </div>
        {ready ? (
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