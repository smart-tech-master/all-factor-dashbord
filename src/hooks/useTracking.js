import { useContext } from 'react';
import { TrackingContext } from 'contexts/TrackingProvider';

const useTracking = () => {
  const context = useContext(TrackingContext);

  if (context === undefined) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }

  return context;
};

export default useTracking;
