import React from 'react';
import { Button, Skeleton } from '@mui/material';
import Image from 'next/image';

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
    <div className='flex flex-wrap justify-center'>
      {items.map((repo) => (
        <div className="card flex-auto" key={repo.id}>
          <h3 className="text-3xl text-center font-bold">{repo.name}</h3>
          {repo.description && <p>{repo.description}</p>}
          <span className="flex justify-between items-center">
            <p className="repoCard__stars">⭐ {repo.stargazers_count}</p>
            <Button variant="contained" color="primary" href={repo.html_url} target="_blank">
              <Image src={"/assets/icons/open_in_new.svg"} alt="Open in new tab" width={20} height={20}/>
              View
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReposList;
