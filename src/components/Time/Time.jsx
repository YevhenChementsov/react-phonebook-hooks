import { useEffect, useRef, useState } from 'react';

import { Clock } from './Time.styled';

export const Time = () => {
  const [time, setTime] = useState(() => new Date());

  const timeID = useRef(null);

  useEffect(() => {
    timeID.current = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timeID);
  }, []);

  return <Clock>{time.toLocaleTimeString([], { timeStyle: 'short' })}</Clock>;
};
