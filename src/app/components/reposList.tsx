import React from 'react';
import { Button, Skeleton } from '@mui/material';

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
  if (!items || items.length === 0) {
    return (
      <div className='w-full'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div className='card' key={index}>
            <Skeleton variant="rectangular" width={150} height={40} className='my-3'/>
            <Skeleton variant="rectangular" width={350} height={20} className='my-3'/>
            <Skeleton variant="rectangular" width={200} height={20} className='my-3'/>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className='w-full'>
      {items.map((repo) => (
        <div className="card" key={repo.id}>
          <h3 className="text-3xl text-center font-bold">{repo.name}</h3>
          {repo.description && <p>{repo.description}</p>}
          <span className="flex justify-between items-center">
            <p className="repoCard__stars">⭐ {repo.stargazers_count}</p>
            <Button variant="contained" color="primary" href={repo.html_url} target="_blank">
              View
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReposList;
