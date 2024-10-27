"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Navbar() {
  const { t, i18n } = useTranslation("nav");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);

  if (!isReady) {
    return (
      <Box className="flex space-x-4">
        <Skeleton variant="text" width={100} />
      </Box>
    )
  }

  return (
    <nav className="p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            {t("home")}
          </Link>
        </li>
        <li>
          <Link href="/about">
            {t("about")}
          </Link>
        </li>
        <li>
          <Link href="/contact">
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}