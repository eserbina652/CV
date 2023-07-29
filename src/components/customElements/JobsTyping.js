import React, { useEffect, useState } from 'react';

const iAmData = [
  'Frontend Developer',
  'Android App Developer',
  'UI/UX Designer',
];

const JobsTyping = () => {
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

    onAddLetter(jobText, currentIndex + 1);
  };

  useEffect(() => {
    const currentJobText = iAmData[currentJobIndex];
    onAddLetter(currentJobText, 0);
  }, [currentJobIndex]);
  return <span>{jobs}</span>;
};

export default JobsTyping;
