import React from 'react';
import { Button, Skeleton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  html_url: string;
}

interface ReposListProps {
  items: Repo[];
}

const ReposList: React.FC<ReposListProps> = ({ items }) => {
    const { t, ready } = useTranslation();

  if (!items || items.length === 0) {
    return (
      <div className='flex flex-wrap justify-center'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div className='card flex-auto' key={index}>
            <Skeleton variant="rectangular" width={150} height={40} className='my-3'/>
            <Skeleton variant="rectangular" width={350} height={20} className='my-3'/>
            <Skeleton variant="rectangular" width={200} height={20} className='my-3'/>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]'>
      {items.map((repo) => (
        <div className="card flex flex-col gap-4" key={repo.id}>
          <h3 className="text-3xl text-center">{repo.name}</h3>
          {repo.description && <p>{repo.description}</p>}
          <div className="flex justify-between items-center mt-auto">
            <p className="repoCard__stars">⭐ {repo.stargazers_count}</p>
            <Button variant="contained" href={repo.html_url} target="_blank">
              <OpenInNewIcon className="mr-2" />
              {!ready ? <Skeleton width={50}/> : t("viewOnGitHub")}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReposList;
