// components/Clock.js
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['cyrillic-ext'] })

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
    
      <p className='text-white font-medium'>{formattedTime}</p>
    </div>
  );
};

export default Clock;
