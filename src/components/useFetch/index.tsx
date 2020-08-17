import { useState, useEffect } from 'react';
import axios from 'axios';

import { VehicleObj, Nullable, FetchHook } from '../../utils/types';

const useFetch = (initialUrl: string): FetchHook => {
  const [response, setResponse] = useState(
    null as Nullable<(any | VehicleObj)[]>,
  );
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const { data } = await axios.get(initialUrl);
        setResponse(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setError(e);
      }
    };

    fetchData();
  }, [initialUrl]);

  return { response, error, isLoading };
};

export default useFetch;
