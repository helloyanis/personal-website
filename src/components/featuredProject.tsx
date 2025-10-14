import React from 'react';
import { Button, Skeleton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Card from './card';
import { t } from 'i18next';

interface ReposListProps {
  name: string;
  description?: string;
  try_url: string;
  source_url: string;
  screenshot_url: string;
}

const FeaturedProject: React.FC<ReposListProps> = ({ name, description, try_url, source_url, screenshot_url }) => {   
  return (
    <Card>
        <h3 className="text-3xl text-center">{name}</h3>
        {screenshot_url ? (
            <img src={screenshot_url} alt={`${name} screenshot`} className="mx-auto my-4 max-h-64 object-contain"/>
        ) : (
            <Skeleton variant="rectangular" width={"100%"} height={256} className='my-4'/>
        )}
        {description && <p className="text-center">{description}</p>}
        <div className="flex justify-center space-x-4 mt-4">
            <Button variant="contained" color="primary" href={try_url} target="_blank" startIcon={<OpenInNewIcon />}>
                {t("tryItOut")}
            </Button>
            <Button variant="outlined" color="primary" href={source_url} target="_blank" startIcon={<OpenInNewIcon />}>
                {t("sourceCode")}
            </Button>
        </div>
    </Card>
      )
};

export default FeaturedProject;
