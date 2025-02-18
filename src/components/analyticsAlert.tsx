"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type SnackbarAlertProps = {
  shouldLoadAnalytics: boolean;
};

const AnalyticsAlert: React.FC<SnackbarAlertProps> = ({ shouldLoadAnalytics }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if(i18n.isInitialized && localStorage.getItem('lastGPCValue') !== shouldLoadAnalytics.toString()) {
        setSnackbarOpen(true);
        localStorage.setItem('lastGPCValue', shouldLoadAnalytics.toString());
    }
  }, [i18n.isInitialized, shouldLoadAnalytics]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={10000}
      onClose={handleCloseSnackbar}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity="info"
        sx={{ width: '100%' }}
      >
        {shouldLoadAnalytics
          ? t("analyticsEnabled")
          : t("analyticsDisabled")}
      </Alert>
    </Snackbar>
  );
};

export default AnalyticsAlert;
