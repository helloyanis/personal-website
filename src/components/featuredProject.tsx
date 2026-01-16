import React from 'react';
import { Button, Skeleton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Card from './card';
import { t } from 'i18next';
import Image from 'next/image';

interface ReposListProps {
  name: string;
  description?: string;
  try_url: string;
  source_url: string;
  screenshot_url: string;
}

const FeaturedProject: React.FC<ReposListProps> = ({ name, description, try_url, source_url, screenshot_url }) => {   
  return (
    <div className="card m-4">
        <h3 className="text-3xl text-center">{name}</h3>
        {screenshot_url && (
            <Image src={screenshot_url} alt={`${name} screenshot`} className="mx-auto my-4 max-h-64 object-contain" width={500} height={500}/>
        )}
        {description && <p className="text-center">{description}</p>}
        <div className="flex justify-center gap-4 mt-4">
            <Button variant="contained" color="primary" href={try_url} target="_blank" startIcon={<OpenInNewIcon />}>
                {t("tryItOut")}
            </Button>
            <Button variant="outlined" color="primary" href={source_url} target="_blank" startIcon={<OpenInNewIcon />}>
                {t("sourceCode")}
            </Button>
        </div>
    </div>
      )
};

export default FeaturedProject;
