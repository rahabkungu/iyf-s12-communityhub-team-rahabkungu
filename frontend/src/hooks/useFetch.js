import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. AbortController lets us cancel the fetch if the user leaves the page early
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal: controller.signal });
        
        // fetch() doesn't throw an error on 404/500, so we check response.ok manually
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Ignore abort errors caused by cleanup; catch real network/HTTP errors
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // 2. Cleanup function: required by Week 9 marker rules!
    return () => controller.abort();
  }, [url]); // Re-runs automatically if the URL changes (e.g., /posts/1 -> /posts/2)

  return { data, loading, error };
}