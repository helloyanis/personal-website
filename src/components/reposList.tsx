import React from 'react';
import Card from './card';
import Grid from './grid';
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

  return (
    <Grid itemW="380">
        {
        (!items || items.length === 0) ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Card className="flex flex-col gap-4" key={index}>
              <Skeleton variant="rectangular" width={150} height={40} />
              <Skeleton variant="rectangular" width={350} height={20} />
              <Skeleton variant="rectangular" width={200} height={20} />
            </Card>
          ))
        ) : (
          items.map((repo) => (
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
          ))
        )
      }
    </Grid>
  );
};

export default ReposList;
