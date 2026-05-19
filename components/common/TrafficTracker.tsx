'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TrafficTracker() {
  const pathname = usePathname();

  useEffect(() => {
  
    const saveTraffic =
      async () => {
        try {
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/traffic/save`,
            {
              method: 'POST',
            }
          );
        } catch (error) {
          console.log(error);
        }
      };

    saveTraffic();
  }, [pathname]);

  return null;
}