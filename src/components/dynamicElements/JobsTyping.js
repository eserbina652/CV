import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const JobsTyping = () => {
  const { t } = useTranslation();
  const iAmData = [t('job1'), t('job2')];

  const [jobs, setJobs] = useState('');
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const onAddLetter = async (jobText, currentIndex) => {
    if (currentIndex === jobText.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const nextIndex = (currentJobIndex + 1) % iAmData.length;
      setCurrentJobIndex(nextIndex);

      setJobs('');
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
    setJobs(jobText.slice(0, currentIndex + 1));

    await onAddLetter(jobText, currentIndex + 1);
  };

  useEffect(() => {
    const currentJobText = iAmData[currentJobIndex];
    onAddLetter(currentJobText, 0);
  }, [currentJobIndex]);
  return <span>{jobs}</span>;
};

export default JobsTyping;
