// src/app/navbar.tsx
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
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
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}