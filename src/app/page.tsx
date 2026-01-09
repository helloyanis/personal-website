"use client"
import "@/app/i18n";
import { Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import ReposList from '../components/reposList';
import FeaturedProject from '@/components/featuredProject';
import Image from 'next/image';

export default function Home() {
  const { t, ready } = useTranslation();

  const [url] = useState('https://api.github.com/search/repositories?q=user:helloyanis+fork:true&sort=stars&per_page=10&type=Repositories');
  const [items, setItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  // ensure mounted is false during server render and true after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // fetch only after we are mounted (client) and translations are ready and items empty
  useEffect(() => {
    if (!mounted || !ready || items.length) return;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setItems(data.items ?? []);
      })
      .catch(error => console.error('Error:', error));
  }, [mounted, ready, items.length, url]);

  return (
    <div className="min-h-screen py-2">
      <Card>
        <Image
          src="/assets/images/profile.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        {mounted && ready ? (
          <h1 className="text-4xl font-bold text-center">
            {t("welcomeTitle")}
          </h1>
        ) : (
          <Skeleton width={300} height={48} className="mx-auto" />
        )}

        {mounted && ready ? (
          <p className="text-center mt-4">
            {t("welcomeDescription")}
          </p>
        ) : (
          <Skeleton width={400} height={24} className="mx-auto mt-4" />
        )}
      </Card>

      {mounted && ready ? (
        <h2 className="text-2xl font-bold mt-8">
          {t("featuredProjectsTitle")}
        </h2>
      ) : (
        <Skeleton width={200} height={40} />
      )}

      {mounted && ready ? (
        <h2 className="text-xl text-center mt-8">
          {t("featuredProjectsDescription")}
        </h2>
      ) : (
        <Skeleton width={200} height={40} />
      )}

      <FeaturedProject
        name={mounted && ready ? t("featuredProject1") : ""}
        description={mounted && ready ? t("featuredProject1Desc") : ""}
        try_url='https://addons.mozilla.org/addon/media-downloader-unleashed?utm_source=personal-website'
        source_url='https://github.com/helloyanis/media-downloader-unleashed'
        screenshot_url='/assets/images/mdunleashed.png'
      />
      <FeaturedProject
        name={mounted && ready ? t("featuredProject2") : ""}
        description={mounted && ready ? t("featuredProject2Desc") : ""}
        try_url='https://explorer.🦊💻.ws'
        source_url='https://github.com/helloyanis/js-explorer'
        screenshot_url='/assets/images/jsexplorer.png'
      />

      {mounted && ready ? (
        <h2 className="text-2xl font-bold mt-8">
          {t("popularRepositories")}
        </h2>
      ) : (
        <Skeleton width={200} height={40} />
      )}

      <div className='w-full' id="reposContainer">
        <ReposList items={items} />
      </div>
    </div>
  );
}
