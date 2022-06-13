import mixpanel from 'mixpanel-browser';
import BaseTracking from './BaseTracking';

export default class MixpanelTracking extends BaseTracking {
  constructor() {
    super();
    mixpanel.init(process.env.REACT_APP_TRACKING_MIXPANEL_ID);
  }

  trackUser(userId) {
    mixpanel.identify(userId);
  }

  trackEvent(eventName, eventProperties) {
    mixpanel.track(eventName, eventProperties);
  }
}
