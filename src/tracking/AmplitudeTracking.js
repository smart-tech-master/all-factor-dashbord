import amplitude from 'amplitude-js/amplitude.esm';
import BaseTracking from './BaseTracking';

export default class AmplitudeTracking extends BaseTracking {
  constructor() {
    super();
    amplitude.getInstance().init(process.env.REACT_APP_TRACKING_AMPLITUDE_ID);
  }

  trackUser(userId) {
    amplitude.getInstance().setUserId(userId);
  }

  trackEvent(eventName, eventProperties) {
    amplitude.getInstance().logEvent(eventName, eventProperties);
  }
}
