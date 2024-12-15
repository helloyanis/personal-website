import React from 'react';
import { Button, CircularProgress } from '@mui/material';

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
  if (!items) {
    return <CircularProgress />;
  }
  return (
    <div>
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
