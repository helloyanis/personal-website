"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function Navbar() {
  const { t, i18n } = useTranslation("nav");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);

  return (
    <nav className="p-4">
      <ul className="flex space-x-4 text-center justify-center">
        <li>
          {isReady ? (
            <Link href="/" className="nav-link" shallow>
              {"🏠"}<br/>{t("home")}
            </Link>
          ) : (
            <Skeleton width={100} height={24} />
          )}
        </li>
        <li>
          {isReady ? (
            <Link href="/about" className="nav-link" shallow>
              {"ℹ️"}<br/>{t("about")}
            </Link>
          ) : (
            <Skeleton width={100} height={24} />
          )}
        </li>
        <li>
          {isReady ? (
            <Link href="/contact" className="nav-link" shallow>
              {"💬"}<br/>{t("contact")}
            </Link>
          ) : (
            <Skeleton width={100} height={24} />
          )}
        </li>
        <li>
          {isReady ? (
            <Link href="/funzone" className="nav-link" shallow>
              {"🕹️"}<br/>{t("funzone")}
            </Link>
          ) : (
            <Skeleton width={100} height={24} />
          )}
        </li>
      </ul>
    </nav>
  );
}