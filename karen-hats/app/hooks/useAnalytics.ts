import { useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

const useAnalytics = (eventName: string, data: any) => {
  useEffect(() => {
    trackEvent(eventName, data);
  }, [eventName, data]);
};

export default useAnalytics;
