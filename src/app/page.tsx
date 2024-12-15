"use client"
import { Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Card from './components/card';
import ReposList from './components/reposList';
export default function Home() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n.isInitialized]);

  const [url] = useState('https://api.github.com/search/repositories?q=user:helloyanis+fork:true&sort=stars&per_page=10&type=Repositories');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!isReady || items.length) return;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setItems(data.items);
      })
      .catch(error => console.error('Error:', error));
  });

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Card>
          <h1 className="text-4xl text-center font-bold">
            {t("welcomeText")}
          </h1>
          <p className="text-lg text-center mt-4">
            {t("welcomeDescription")}
          </p>
      </Card>
      {
        isReady ? (
          <h2 className="text-2xl font-bold mt-8">
            {t("popularRepositories")}
          </h2>
        ) : ( 
          <Skeleton width={200} height={40} />
        )
      }
      <div className='flex flex-wrap justify-center' id="reposContainer">
        <ReposList items={items} />
      </div>

    </div>
  );
}
