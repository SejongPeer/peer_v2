import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import { COLORS } from '../theme';

const ProgressBox = styled(Box)`
    width: 100%;
    margin-top: 10px;
`;
const Progress = styled(LinearProgress)`         
    &.MuiLinearProgress-root {
        background-color: #C5C5C5;
    }
    .MuiLinearProgress-bar {
        background-color: ${COLORS.main};
    }
`;

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ProgressBox>
      <Progress variant="determinate" value={progress} />
    </ProgressBox>
  );
}
