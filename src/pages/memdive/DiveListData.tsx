import { useEffect, useState } from 'react';

interface Dives {
  diveNumber: number;
  diveName: string;
  group?: string;
}

export function useDives() {
  const [dives, setDives] = useState<Dives[]>([]);  // <-- Use Dives here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/diveList.JSON')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data: Dives[]) => {  // <-- Use Dives here too
        setDives(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { dives, loading, error };
}
