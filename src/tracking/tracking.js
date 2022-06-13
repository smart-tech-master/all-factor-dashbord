import AmplitudeTracking from './AmplitudeTracking';
import HeapTracking from './HeapTracking';
import MixpanelTracking from './MixpanelTracking';
import debug from '../utils/debug';

const TRACKING_DEBUG_CONTEXT = 'TrackingService';
const trackingEnabled = process.env.REACT_APP_TRACKING === 'enabled';

const amplitudeTracking = new AmplitudeTracking();
const heapTracking = new HeapTracking();
const mixpanelTracking = new MixpanelTracking();
const services = [amplitudeTracking, heapTracking, mixpanelTracking];

const tracking = {
  trackEvent: (eventName, eventProperties = {}) => {
    if (!eventName) return;
    if (trackingEnabled) {
      services.forEach((service) => {
        service.trackEvent(eventName, eventProperties);
      });
    } else {
      debug({ eventName, eventProperties }, TRACKING_DEBUG_CONTEXT);
    }
  },

  trackUser: (userId) => {
    if (!userId) return;
    if (trackingEnabled) {
      services.forEach((service) => {
        service.trackUser(userId);
      });
    } else {
      debug({ userId }, TRACKING_DEBUG_CONTEXT);
    }
  },
};

export default tracking;
